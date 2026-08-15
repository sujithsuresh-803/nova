import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import { theme } from '../theme'
import { useNova, pct } from '../store'
import ProgressBar from '../components/ProgressBar'

export default function GoalsScreen() {
  const { state, dispatch } = useNova()
  const goals = state.goals
  const fmt = (n) => Number(n).toLocaleString()
  const step = (g) => (g.target >= 1000 ? Math.round(g.target / 20) : 1)

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Goals</Text>
      <Text style={styles.sub}>Tap − / + to log progress. It updates your North Star instantly.</Text>

      {goals.map((g) => {
        const p = pct(g)
        const complete = p >= 100
        return (
          <View key={g.id} style={[styles.card, complete && styles.cardDone]}>
            <View style={styles.cardTop}>
              <Text style={styles.cardTitle}>{g.title}</Text>
              {complete && <Text style={styles.done}>🎉</Text>}
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>{g.metricLabel}</Text>
              <Text style={styles.metricVal}>{fmt(g.current)} <Text style={styles.muted}>/ {fmt(g.target)}</Text></Text>
            </View>
            <ProgressBar value={p} height={14} />
            <View style={styles.controls}>
              <Text style={styles.pctText}>{p}%</Text>
              <View style={styles.btnGroup}>
                <Pressable style={styles.stepBtn} onPress={() => dispatch({ type: 'BUMP_GOAL', id: g.id, delta: -step(g) })}>
                  <Text style={styles.stepBtnText}>−</Text>
                </Pressable>
                <Pressable style={[styles.stepBtn, styles.stepBtnPlus]} onPress={() => dispatch({ type: 'BUMP_GOAL', id: g.id, delta: step(g) })}>
                  <Text style={[styles.stepBtnText, { color: '#1a0f2c' }]}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )
      })}

      <Pressable style={styles.resetBtn} onPress={() => dispatch({ type: 'RESET' })}>
        <Text style={styles.resetText}>Reset demo data</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 18, paddingBottom: 40 },
  h1: { color: theme.ink, fontSize: 26, fontWeight: '800' },
  sub: { color: theme.inkSoft, fontSize: 14, marginTop: 4, marginBottom: 18 },
  card: { backgroundColor: theme.surface, borderRadius: theme.radius, padding: 18, marginBottom: 14, borderWidth: 1, borderColor: theme.line },
  cardDone: { borderColor: theme.brand },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { color: theme.ink, fontSize: 16, fontWeight: '700', flex: 1 },
  done: { fontSize: 18 },
  metricRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 8, marginBottom: 10 },
  metricLabel: { color: theme.inkSoft, fontSize: 13 },
  metricVal: { color: theme.ink, fontSize: 15, fontWeight: '700' },
  controls: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 },
  pctText: { color: theme.ink, fontSize: 16, fontWeight: '800' },
  btnGroup: { flexDirection: 'row', gap: 10 },
  stepBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.surface2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: theme.line },
  stepBtnPlus: { backgroundColor: theme.brand, borderColor: theme.brand },
  stepBtnText: { color: theme.ink, fontSize: 24, fontWeight: '700', lineHeight: 26 },
  muted: { color: theme.inkSoft },
  resetBtn: { alignSelf: 'center', marginTop: 8, paddingVertical: 10, paddingHorizontal: 18 },
  resetText: { color: theme.inkSoft, fontSize: 13 },
})
