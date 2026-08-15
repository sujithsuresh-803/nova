import React, { createContext, useContext, useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'nova.mobile.v1'
const uid = () => Math.random().toString(36).slice(2, 9)
const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }

function seed() {
  return {
    profile: { archetype: null },
    goals: [
      { id: uid(), title: 'Write 12 songs this season', metricLabel: 'Songs written', current: 5, target: 12, dueDate: addDays(60) },
      { id: uid(), title: 'Release my debut EP', metricLabel: 'Tracks finished', current: 3, target: 6, dueDate: addDays(150) },
      { id: uid(), title: 'Play 5 live shows', metricLabel: 'Shows played', current: 2, target: 5, dueDate: addDays(45) },
      { id: uid(), title: 'Hit 10k monthly listeners', metricLabel: 'Monthly listeners', current: 3200, target: 10000, dueDate: addDays(120) },
    ],
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return action.state
    case 'SET_ARCHETYPE':
      return { ...state, profile: { ...state.profile, archetype: action.id } }
    case 'ADD_GOAL':
      return { ...state, goals: [{ id: uid(), current: 0, ...action.goal }, ...state.goals] }
    case 'BUMP_GOAL':
      return {
        ...state,
        goals: state.goals.map((g) =>
          g.id === action.id
            ? { ...g, current: Math.max(0, Math.min(g.target, g.current + action.delta)) }
            : g
        ),
      }
    case 'RESET':
      return seed()
    default:
      return state
  }
}

const NovaContext = createContext(null)

export function NovaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null)

  // Load persisted state once on mount.
  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY)
        const next = raw ? { ...seed(), ...JSON.parse(raw) } : seed()
        if (active) dispatch({ type: 'HYDRATE', state: next })
      } catch {
        if (active) dispatch({ type: 'HYDRATE', state: seed() })
      }
    })()
    return () => { active = false }
  }, [])

  // Persist on every change (after hydration).
  useEffect(() => {
    if (!state) return
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {})
  }, [state])

  return <NovaContext.Provider value={{ state, dispatch }}>{children}</NovaContext.Provider>
}

export function useNova() {
  const ctx = useContext(NovaContext)
  if (!ctx) throw new Error('useNova must be used within NovaProvider')
  return ctx
}

// Derived helpers
export const pct = (g) => (g.target > 0 ? Math.min(100, Math.round((g.current / g.target) * 100)) : 0)
export const northStar = (goals) =>
  goals.length
    ? Math.round(
        (goals.reduce((s, g) => s + Math.min(1, g.target > 0 ? g.current / g.target : 0), 0) / goals.length) * 100
      )
    : 0
