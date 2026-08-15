import React from 'react'
import { View, StyleSheet } from 'react-native'
import { theme } from '../theme'

export default function ProgressBar({ value = 0, height = 12 }) {
  return (
    <View style={[styles.track, { height, borderRadius: height }]}>
      <View style={[styles.fill, { width: `${Math.max(0, Math.min(100, value))}%`, borderRadius: height }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  track: { backgroundColor: theme.track, overflow: 'hidden', width: '100%' },
  fill: { height: '100%', backgroundColor: theme.brand },
})
