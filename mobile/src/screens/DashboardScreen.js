import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { theme } from '../theme'
import { useNova, pct, northStar } from '../store'
import ProgressBar from '../components/ProgressBar'

export default function DashboardScreen() {
  const { state } = useNova()
  const goals = state.goals
  const ns = northStar(goals)
  const active = goals.filter((g) => pct(g) < 100)
  const done = goals.length - active.length
  const inMotion = [...active].sort((a, b) => pct(b) - pct(a))
  const fmt = (n) => Number(n).toLocaleString()

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Your come-up ✦</Text>
      <Text style={styles.sub}>Turn bedroom demos into main-stage dreams.</Text>

      {/* North Star hero */}
      <View style={styles.hero}>
        <View style={styles.nsRow}>
          <Text style={styles.nsNum}>{ns}%</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.nsCap}>NORTH STAR</Text>
            <Text style={styles.nsDesc}>Average progress across all your goals.</Text>
          </View>
        </View>
        <View style={{ marginTop: 14 }}>
          <ProgressBar value={ns} height={14} />
        </View>
        <View style={styles.statRow}>
          <Stat n={goals.length} label="Goals" />
          <Stat n={active.length} label="In motion" />
          <Stat n={done} label="Done" />
        </View>
      </View>

      {/* Goals in motion */}
      <Text style={styles.sectionH}>🎯 Goals in motion</Text>
      {inMotion.length === 0 && <Text style={styles.muted}>Every goal is complete — time to dream up new ones. 🎉</Text>}
      {inMotion.map((g) => (
        <View key={g.id} style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTitle}>{g.title}</Text>
            <Text style={styles.cardVal}>
              {fmt(g.current)} <Text style={styles.muted}>/ {fmt(g.target)}</Text>
            </Text>
          </View>
          <ProgressBar value={pct(g)} />
          <Text style={styles.cardMeta}>{g.metricLabel} · {pct(g)}%</Text>
        </View>
      ))}
    </ScrollView>
  )
}

function Stat({ n, label }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statN}>{n}</Text>
      <Text style={styles.statL}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 18, paddingBottom: 40 },
  h1: { color: theme.ink, fontSize: 26, fontWeight: '800', letterSpacing: -0.5 },
  sub: { color: theme.inkSoft, fontSize: 14, marginTop: 4, marginBottom: 18 },
  hero: {
    backgroundColor: theme.surface, borderRadius: theme.radius, padding: 20,
    borderWidth: 1, borderColor: theme.line,
  },
  nsRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  nsNum: { color: theme.brand, fontSize: 44, fontWeight: '800' },
  nsCap: { color: theme.inkSoft, fontSize: 11, letterSpacing: 1.5, fontWeight: '700' },
  nsDesc: { color: theme.ink, fontSize: 14, marginTop: 3 },
  statRow: { flexDirection: 'row', gap: 10, marginTop: 18 },
  stat: { flex: 1, backgroundColor: theme.surface2, borderRadius: theme.radiusSm, paddingVertical: 12, alignItems: 'center' },
  statN: { color: theme.ink, fontSize: 22, fontWeight: '800' },
  statL: { color: theme.inkSoft, fontSize: 12, marginTop: 2 },
  sectionH: { color: theme.ink, fontSize: 18, fontWeight: '700', marginTop: 26, marginBottom: 12 },
  card: {
    backgroundColor: theme.surface, borderRadius: theme.radius, padding: 16, marginBottom: 12,
    borderWidth: 1, borderColor: theme.line,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 },
  cardTitle: { color: theme.ink, fontSize: 15, fontWeight: '700', flex: 1, paddingRight: 10 },
  cardVal: { color: theme.ink, fontSize: 14, fontWeight: '700' },
  cardMeta: { color: theme.inkSoft, fontSize: 12, marginTop: 8 },
  muted: { color: theme.inkSoft, fontSize: 13 },
})
