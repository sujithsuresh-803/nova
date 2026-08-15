import React, { useState } from 'react'
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from './src/theme'
import { NovaProvider, useNova } from './src/store'
import DashboardScreen from './src/screens/DashboardScreen'
import PathScreen from './src/screens/PathScreen'
import GoalsScreen from './src/screens/GoalsScreen'

const TABS = [
  { key: 'dashboard', label: 'Home', icon: '✦', Screen: DashboardScreen },
  { key: 'path', label: 'My Path', icon: '🚀', Screen: PathScreen },
  { key: 'goals', label: 'Goals', icon: '🎯', Screen: GoalsScreen },
]

export default function App() {
  return (
    <SafeAreaProvider>
      <NovaProvider>
        <Root />
      </NovaProvider>
    </SafeAreaProvider>
  )
}

function Root() {
  const { state } = useNova()
  const [tab, setTab] = useState('dashboard')
  const insets = useSafeAreaInsets()

  if (!state) {
    return (
      <View style={styles.loading}>
        <StatusBar style="light" />
        <ActivityIndicator color={theme.brand} size="large" />
        <Text style={styles.loadingText}>Nova ✦</Text>
      </View>
    )
  }

  const Active = TABS.find((t) => t.key === tab).Screen

  return (
    <SafeAreaView style={styles.app} edges={['top']}>
      <StatusBar style="light" />
      <View style={styles.body}>
        <Active />
      </View>
      <View style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
        {TABS.map((t) => {
          const active = t.key === tab
          return (
            <Pressable key={t.key} style={styles.tab} onPress={() => setTab(t.key)}>
              <Text style={[styles.tabIcon, active && styles.tabIconActive]}>{t.icon}</Text>
              <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{t.label}</Text>
            </Pressable>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: theme.bg },
  body: { flex: 1 },
  loading: { flex: 1, backgroundColor: theme.bg, alignItems: 'center', justifyContent: 'center', gap: 14 },
  loadingText: { color: theme.brand, fontSize: 22, fontWeight: '800' },
  tabBar: {
    flexDirection: 'row', backgroundColor: theme.surface,
    borderTopWidth: 1, borderTopColor: theme.line, paddingTop: 10,
  },
  tab: { flex: 1, alignItems: 'center', gap: 3 },
  tabIcon: { fontSize: 20, opacity: 0.5 },
  tabIconActive: { opacity: 1 },
  tabLabel: { color: theme.inkSoft, fontSize: 11, fontWeight: '600' },
  tabLabelActive: { color: theme.brand },
})
