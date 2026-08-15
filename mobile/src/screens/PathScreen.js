import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import { theme } from '../theme'
import { useNova } from '../store'
import { ARCHETYPES, getArchetype, motivationForToday } from '../paths'

const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }

export default function PathScreen() {
  const { state, dispatch } = useNova()
  const archetype = getArchetype(state.profile?.archetype)
  const [added, setAdded] = useState({})

  if (!archetype) {
    return (
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Text style={styles.h1}>What kind of artist are you?</Text>
        <Text style={styles.sub}>Pick your lane and Nova maps your path to a first break.</Text>
        {ARCHETYPES.map((a) => (
          <Pressable key={a.id} style={styles.archCard} onPress={() => dispatch({ type: 'SET_ARCHETYPE', id: a.id })}>
            <Text style={styles.archEmoji}>{a.emoji}</Text>
            <Text style={styles.archName}>{a.name}</Text>
            <Text style={styles.archTag}>{a.tagline}</Text>
            <Text style={styles.archBlurb}>{a.blurb}</Text>
            <Text style={styles.archGo}>Choose this path →</Text>
          </Pressable>
        ))}
      </ScrollView>
    )
  }

  const trackStep = (s, i) => {
    dispatch({
      type: 'ADD_GOAL',
      goal: { title: s.title, metricLabel: s.metricLabel, current: 0, target: s.target, dueDate: addDays(45) },
    })
    setAdded((p) => ({ ...p, [i]: true }))
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {/* Identity */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>{archetype.emoji}</Text>
        <Text style={styles.eyebrow}>YOUR PATH</Text>
        <Text style={styles.heroName}>{archetype.name}</Text>
        <Text style={styles.heroTag}>{archetype.tagline}</Text>
        <Pressable style={styles.changeBtn} onPress={() => dispatch({ type: 'SET_ARCHETYPE', id: null })}>
          <Text style={styles.changeBtnText}>Change type</Text>
        </Pressable>
      </View>

      {/* Mantra */}
      <View style={styles.mantra}>
        <Text style={styles.mantraLine}>✦ {archetype.mantra}</Text>
        <Text style={styles.mantraToday}>Today: {motivationForToday()}</Text>
      </View>

      {/* How to make it big */}
      <Text style={styles.sectionH}>🚀 How you make it big</Text>
      <Fact label="Your superpower" value={archetype.superpower} />
      <Fact label="Watch out for" value={archetype.watchout} />
      <Fact label="Where to post" value={archetype.platforms.join(' · ')} />
      <Fact label="Posting rhythm" value={archetype.cadence} />
      <Fact label="Metric to watch" value={archetype.northMetric} />

      {/* Roadmap */}
      <Text style={styles.sectionH}>🎯 Roadmap to a first break</Text>
      {archetype.phases.map((p, i) => (
        <View key={i} style={styles.phase}>
          <View style={styles.phaseHead}>
            <View style={styles.phaseDot}><Text style={styles.phaseDotText}>{i + 1}</Text></View>
            <Text style={styles.phaseName}>{p.name}</Text>
            <Text style={styles.phaseWhen}>{p.when}</Text>
          </View>
          {p.steps.map((s, j) => (
            <Text key={j} style={styles.phaseStep}>✦  {s}</Text>
          ))}
        </View>
      ))}

      {/* Next steps */}
      <Text style={styles.sectionH}>🎵 Do these next</Text>
      <Text style={styles.sub}>Track any of these and it shows up on your dashboard.</Text>
      {archetype.nextSteps.map((s, i) => (
        <View key={i} style={styles.stepCard}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={styles.stepTitle}>{s.title}</Text>
            <Text style={styles.stepMeta}>Tracks: {s.metricLabel} → {Number(s.target).toLocaleString()}</Text>
          </View>
          {added[i] ? (
            <Text style={styles.addedText}>✓ Added</Text>
          ) : (
            <Pressable style={styles.trackBtn} onPress={() => trackStep(s, i)}>
              <Text style={styles.trackBtnText}>Track</Text>
            </Pressable>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

function Fact({ label, value }) {
  return (
    <View style={styles.fact}>
      <Text style={styles.factLabel}>{label.toUpperCase()}</Text>
      <Text style={styles.factValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.bg },
  content: { padding: 18, paddingBottom: 40 },
  h1: { color: theme.ink, fontSize: 24, fontWeight: '800' },
  sub: { color: theme.inkSoft, fontSize: 14, marginTop: 4, marginBottom: 14 },
  archCard: { backgroundColor: theme.surface, borderRadius: theme.radius, padding: 18, marginBottom: 12, borderWidth: 1, borderColor: theme.line },
  archEmoji: { fontSize: 30 },
  archName: { color: theme.ink, fontSize: 18, fontWeight: '700', marginTop: 6 },
  archTag: { color: theme.brand, fontSize: 13, fontWeight: '600', marginTop: 2 },
  archBlurb: { color: theme.inkSoft, fontSize: 13, marginTop: 6, lineHeight: 19 },
  archGo: { color: theme.brand, fontSize: 13, fontWeight: '700', marginTop: 10 },
  hero: { backgroundColor: theme.surface2, borderRadius: theme.radius, padding: 22, borderWidth: 1, borderColor: theme.line },
  heroEmoji: { fontSize: 44 },
  eyebrow: { color: theme.inkSoft, fontSize: 11, letterSpacing: 1.5, fontWeight: '700', marginTop: 8 },
  heroName: { color: theme.ink, fontSize: 24, fontWeight: '800', marginTop: 2 },
  heroTag: { color: theme.inkSoft, fontSize: 14, marginTop: 4 },
  changeBtn: { alignSelf: 'flex-start', marginTop: 14, backgroundColor: theme.surface, borderWidth: 1, borderColor: theme.line, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 14 },
  changeBtnText: { color: theme.ink, fontSize: 13, fontWeight: '600' },
  mantra: { backgroundColor: theme.surface, borderRadius: theme.radius, padding: 16, marginTop: 14, borderWidth: 1, borderColor: theme.brand },
  mantraLine: { color: theme.ink, fontSize: 16, fontWeight: '700', fontStyle: 'italic' },
  mantraToday: { color: theme.inkSoft, fontSize: 13, marginTop: 6 },
  sectionH: { color: theme.ink, fontSize: 18, fontWeight: '700', marginTop: 26, marginBottom: 12 },
  fact: { backgroundColor: theme.surface, borderRadius: theme.radiusSm, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: theme.line },
  factLabel: { color: theme.brand, fontSize: 11, letterSpacing: 0.8, fontWeight: '700', marginBottom: 4 },
  factValue: { color: theme.ink, fontSize: 14, lineHeight: 20 },
  phase: { backgroundColor: theme.surface, borderRadius: theme.radius, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: theme.line },
  phaseHead: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  phaseDot: { width: 30, height: 30, borderRadius: 15, backgroundColor: theme.brand, alignItems: 'center', justifyContent: 'center' },
  phaseDotText: { color: '#1a0f2c', fontWeight: '800' },
  phaseName: { color: theme.ink, fontSize: 16, fontWeight: '700', flex: 1 },
  phaseWhen: { color: theme.inkSoft, fontSize: 12, fontWeight: '600' },
  phaseStep: { color: theme.ink, fontSize: 14, lineHeight: 22, marginLeft: 4 },
  stepCard: { backgroundColor: theme.surface, borderRadius: theme.radius, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: theme.line, flexDirection: 'row', alignItems: 'center' },
  stepTitle: { color: theme.ink, fontSize: 15, fontWeight: '700' },
  stepMeta: { color: theme.inkSoft, fontSize: 12, marginTop: 4 },
  trackBtn: { backgroundColor: theme.brand, borderRadius: 20, paddingVertical: 9, paddingHorizontal: 16 },
  trackBtnText: { color: '#1a0f2c', fontWeight: '800', fontSize: 13 },
  addedText: { color: theme.ok, fontWeight: '700', fontSize: 13 },
})
