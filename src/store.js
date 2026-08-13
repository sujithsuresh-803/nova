import { useEffect, useReducer, useState } from 'react'

const STORAGE_KEY = 'nova.v1'
const LEGACY_STORAGE_KEY = 'northstar.v2' // migrate data saved under the old name

const uid = () => Math.random().toString(36).slice(2, 9)

// Gradient palette used to auto-generate a "cover" when a pin has no image.
// Olivia Rodrigo–inspired: lilac, violet, periwinkle & bubblegum pops.
export const GRADIENTS = [
  ['#a78bfa', '#f0abfc'],
  ['#818cf8', '#c4b5fd'],
  ['#f472b6', '#c084fc'],
  ['#c4b5fd', '#a5b4fc'],
  ['#e879f9', '#818cf8'],
  ['#fbcfe8', '#ddd6fe'],
  ['#7c3aed', '#db2777'],
  ['#8b5cf6', '#6366f1'],
  ['#f9a8d4', '#a78bfa'],
  ['#c084fc', '#f0abfc'],
]

export const gradientFor = (seed = '') => {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return GRADIENTS[h % GRADIENTS.length]
}

// ---------- Seed data: an aspiring pop star's vision board ----------
function seed() {
  const b1 = 'songs', b2 = 'stage', b3 = 'era', b4 = 'fans'
  return {
    profile: { archetype: null },
    boards: [
      { id: b1, name: 'Songwriting', emoji: '🎶', description: 'Every superstar starts with one song.' },
      { id: b2, name: 'On Stage', emoji: '🎤', description: 'From my bedroom to the big stage.' },
      { id: b3, name: 'My Era & Aesthetic', emoji: '🦋', description: 'The artist I’m becoming.' },
      { id: b4, name: 'Fans & Streams', emoji: '💜', description: 'Building the people who sing it back.' },
    ],
    pins: [
      { id: uid(), boardId: b1, title: 'Write a song every week', note: 'Even the bad ones. Especially the bad ones.', tags: ['habit', 'writing'], link: '', imageUrl: '', createdAt: Date.now() - 8e8 },
      { id: uid(), boardId: b1, title: 'Fill a whole journal with lyrics', note: 'My diary is my setlist.', tags: ['lyrics'], link: '', imageUrl: '', createdAt: Date.now() - 7.5e8 },
      { id: uid(), boardId: b1, title: 'Co-write with someone I admire', note: 'Learn in the room, not from afar.', tags: ['dream'], link: '', imageUrl: '', createdAt: Date.now() - 7e8 },
      { id: uid(), boardId: b2, title: 'Play my first open mic', note: 'Terrified. Doing it anyway.', tags: ['first', 'live'], link: '', imageUrl: '', createdAt: Date.now() - 6e8 },
      { id: uid(), boardId: b2, title: 'Headline a hometown show', note: 'Everyone who said “someday” — this one’s for you.', tags: ['live'], link: '', imageUrl: '', createdAt: Date.now() - 5.5e8 },
      { id: uid(), boardId: b2, title: 'A sold-out tour', note: 'Purple lights, the whole crowd singing back.', tags: ['bucketlist', 'dream'], link: '', imageUrl: '', createdAt: Date.now() - 5e8 },
      { id: uid(), boardId: b3, title: 'A signature look', note: 'Butterfly clips, purple everything, zero apologies.', tags: ['style'], link: '', imageUrl: '', createdAt: Date.now() - 4e8 },
      { id: uid(), boardId: b3, title: 'GUTS-core: messy, honest, loud', note: 'Say the thing that scares me.', tags: ['vibe'], link: '', imageUrl: '', createdAt: Date.now() - 3.5e8 },
      { id: uid(), boardId: b3, title: 'Music video moodboard', note: 'One take, golden hour, real tears.', tags: ['visuals'], link: '', imageUrl: '', createdAt: Date.now() - 3e8 },
      { id: uid(), boardId: b4, title: 'My first 1,000 real fans', note: 'The ones who found me first.', tags: ['community'], link: '', imageUrl: '', createdAt: Date.now() - 2e8 },
      { id: uid(), boardId: b4, title: 'A song that goes viral (the good kind)', note: 'One clip. The right 15 seconds.', tags: ['dream'], link: '', imageUrl: '', createdAt: Date.now() - 1.5e8 },
      { id: uid(), boardId: b4, title: 'Reply to every DM in week one', note: 'Small now, remembered forever.', tags: ['community'], link: '', imageUrl: '', createdAt: Date.now() - 1e8 },
    ],
    goals: [
      { id: uid(), boardId: b1, title: 'Write 12 songs this season', metricLabel: 'Songs written', current: 5, target: 12, unit: '', dueDate: addDays(60), milestones: [
        { id: uid(), title: 'Start a hook-ideas voice memo folder', done: true },
        { id: uid(), title: 'Finish 3 full demos', done: true },
        { id: uid(), title: 'Write one song that scares me', done: false },
        { id: uid(), title: 'Pick the 5 for the EP', done: false },
      ], createdAt: Date.now() - 5e8 },
      { id: uid(), boardId: b1, title: 'Release my debut EP', metricLabel: 'Tracks finished', current: 3, target: 6, unit: '', dueDate: addDays(150), milestones: [], createdAt: Date.now() - 4.5e8 },
      { id: uid(), boardId: b2, title: 'Play 5 live shows', metricLabel: 'Shows played', current: 2, target: 5, unit: '', dueDate: addDays(45), milestones: [], createdAt: Date.now() - 4e8 },
      { id: uid(), boardId: b4, title: 'Hit 10k monthly listeners', metricLabel: 'Monthly listeners', current: 3200, target: 10000, unit: '', dueDate: addDays(120), milestones: [], createdAt: Date.now() - 3e8 },
    ],
  }
}

function addDays(n) {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      // Ensure newer fields exist for states saved before they were added.
      return { profile: { archetype: null }, ...parsed }
    }
  } catch { /* ignore corrupt storage */ }
  return seed()
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return { ...state, boards: [...state.boards, { id: uid(), ...action.board }] }
    case 'UPDATE_BOARD':
      return { ...state, boards: state.boards.map(b => b.id === action.id ? { ...b, ...action.patch } : b) }
    case 'DELETE_BOARD':
      return {
        ...state,
        boards: state.boards.filter(b => b.id !== action.id),
        pins: state.pins.filter(p => p.boardId !== action.id),
        goals: state.goals.filter(g => g.boardId !== action.id),
      }
    case 'ADD_PIN':
      return { ...state, pins: [{ id: uid(), createdAt: Date.now(), ...action.pin }, ...state.pins] }
    case 'UPDATE_PIN':
      return { ...state, pins: state.pins.map(p => p.id === action.id ? { ...p, ...action.patch } : p) }
    case 'DELETE_PIN':
      return { ...state, pins: state.pins.filter(p => p.id !== action.id) }
    case 'ADD_GOAL':
      return { ...state, goals: [{ id: uid(), createdAt: Date.now(), milestones: [], ...action.goal }, ...state.goals] }
    case 'UPDATE_GOAL':
      return { ...state, goals: state.goals.map(g => g.id === action.id ? { ...g, ...action.patch } : g) }
    case 'DELETE_GOAL':
      return { ...state, goals: state.goals.filter(g => g.id !== action.id) }
    case 'TOGGLE_MILESTONE':
      return {
        ...state,
        goals: state.goals.map(g => g.id === action.goalId ? {
          ...g,
          milestones: g.milestones.map(m => m.id === action.milestoneId ? { ...m, done: !m.done } : m),
        } : g),
      }
    case 'SET_ARCHETYPE':
      return { ...state, profile: { ...state.profile, archetype: action.id } }
    case 'RESET':
      return seed()
    default:
      return state
  }
}

export function useStore() {
  const [state, dispatch] = useReducer(reducer, undefined, load)
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch { /* quota */ }
  }, [state])
  return [state, dispatch]
}

const THEME_KEY = 'nova.theme'

function initialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY) || localStorage.getItem('northstar.theme')
    if (saved) return saved
  } catch { /* ignore */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(THEME_KEY, theme) } catch { /* ignore */ }
  }, [theme])
  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

export { uid }
