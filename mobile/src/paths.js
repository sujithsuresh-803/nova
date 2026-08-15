// Curated "path" engine — shared conceptually with the web app.
// No AI: hand-authored roadmaps per creator archetype.

export const ARCHETYPES = [
  {
    id: 'reels', name: 'Reels Singer', emoji: '🎬', tagline: 'Short clips, big reach.',
    blurb: '15–60 second vocal moments engineered for the For You page.',
    platforms: ['Instagram Reels', 'TikTok', 'YouTube Shorts'],
    cadence: '1 clip/day · 5–7× a week',
    northMetric: 'Saves & shares per clip',
    superpower: 'Discovery is built into the platform — one clip can change your whole year.',
    watchout: 'Chasing every trend blurs your identity. Keep one recognizable “thing”.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: ['Pick ONE signature format', 'Batch-film 10 clips before posting', 'Fix lighting + a $20 clip-on mic'] },
      { name: 'Momentum', when: 'weeks 5–12', steps: ['Post daily at the same time', 'Reply to every comment in the first hour', 'Double down on what overperforms'] },
      { name: 'First break', when: 'the goal', steps: ['Get one clip past 100k views', 'Convert viewers → followers', 'Release the full version of your best clip'] },
      { name: 'Scale', when: 'after the break', steps: ['Collab with a creator your size', 'Turn top clips into a Spotify single', 'Start a Discord for superfans'] },
    ],
    nextSteps: [
      { title: 'Film 10 clips this week', metricLabel: 'Clips filmed', target: 10 },
      { title: 'Post daily for 30 days', metricLabel: 'Days posted', target: 30 },
      { title: 'Reach 5,000 followers', metricLabel: 'Followers', target: 5000 },
    ],
    mantra: 'The algorithm can’t discover what you never post. Ship the clip.',
  },
  {
    id: 'acoustic', name: 'Acoustic Singer-Songwriter', emoji: '🎸', tagline: 'Just you, an instrument, and the truth.',
    blurb: 'Intimate, lyric-first songs that make one person feel seen.',
    platforms: ['YouTube', 'Instagram', 'Spotify', 'Local venues'],
    cadence: '1 song or session video/week',
    northMetric: 'Watch-time & repeat listeners',
    superpower: 'Emotional connection. People don’t just hear you — they feel understood.',
    watchout: 'Great songs can hide in bad audio. Recording quality is your bottleneck.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–6', steps: ['Write 4 songs you’d play for no one', 'Learn one clean recording setup', 'Film a “live from my room” series'] },
      { name: 'Momentum', when: 'months 2–4', steps: ['Play 3 open mics', 'Covers to get found, originals to be remembered', 'Collect emails at every show'] },
      { name: 'First break', when: 'the goal', steps: ['Land a song on an acoustic playlist', 'Sell out a 30–50 cap room', 'Get a song licensed for a video'] },
      { name: 'Scale', when: 'after the break', steps: ['Book a mini regional tour', 'Release a cohesive EP', 'Open for a bigger local act'] },
    ],
    nextSteps: [
      { title: 'Write 4 originals', metricLabel: 'Songs written', target: 4 },
      { title: 'Play 3 open mics', metricLabel: 'Open mics played', target: 3 },
      { title: 'Grow email list to 100 fans', metricLabel: 'Email subscribers', target: 100 },
    ],
    mantra: 'Write the song only you could write. That’s the one that travels.',
  },
  {
    id: 'instrumental', name: 'Instrumentalist', emoji: '🎹', tagline: 'Let the playing do the talking.',
    blurb: 'Instrument-only — covers, solos, loops, and technique that stops the scroll.',
    platforms: ['YouTube', 'Instagram', 'TikTok', 'Session work'],
    cadence: '2–3 short performance clips/week',
    northMetric: 'Profile visits → saves',
    superpower: 'Skill is undeniable and universal — no language, no gatekeepers.',
    watchout: 'Impressive isn’t the same as memorable. Give people a reason to follow.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: ['Pick a niche: genre, technique, or “X on Y”', 'Film 8 clips of your cleanest playing', 'Learn close-up framing on your hands'] },
      { name: 'Momentum', when: 'weeks 5–12', steps: ['Cover trending songs the week they blow up', 'Post “play over this” bait', 'Offer to record parts for singers'] },
      { name: 'First break', when: 'the goal', steps: ['Get stitched/duetted by a bigger creator', 'Land your first paid session', 'Release a signature original piece'] },
      { name: 'Scale', when: 'after the break', steps: ['Sell loop/sample packs or tabs', 'Teach a short course', 'Become the go-to player for a scene'] },
    ],
    nextSteps: [
      { title: 'Post 8 performance clips', metricLabel: 'Clips posted', target: 8 },
      { title: 'Cover 5 trending songs', metricLabel: 'Covers made', target: 5 },
      { title: 'Book first 3 paid gigs', metricLabel: 'Paid gigs', target: 3 },
    ],
    mantra: 'Practice in private, post in public. The reps compound both ways.',
  },
  {
    id: 'edm', name: 'EDM Producer', emoji: '🎧', tagline: 'Build the drop the world dances to.',
    blurb: 'Electronic tracks, remixes, and beats — made in the box, played everywhere.',
    platforms: ['SoundCloud', 'Spotify', 'TikTok', 'Beatport'],
    cadence: 'Finish 1 track/2 weeks · clip weekly',
    northMetric: 'Playlist adds & track saves',
    superpower: 'You control the entire sound alone — no band, no permission needed.',
    watchout: 'Endless tweaking = zero releases. Finished and shipped beats perfect and hidden.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–8', steps: ['Finish 5 tracks start-to-end', 'Master one genre/BPM lane first', 'Learn a fast mixdown checklist'] },
      { name: 'Momentum', when: 'months 3–5', steps: ['Remix a track trending now', 'Post “making the drop” clips', 'Submit to reposts & small playlists'] },
      { name: 'First break', when: 'the goal', steps: ['Land on an editorial playlist', 'Sign to a small label/compilation', 'Sell your first beats or land a vocal collab'] },
      { name: 'Scale', when: 'after the break', steps: ['Play your first DJ set', 'Drop sample packs & presets', 'Build a reliable release cadence'] },
    ],
    nextSteps: [
      { title: 'Finish 5 full tracks', metricLabel: 'Tracks finished', target: 5 },
      { title: 'Get 10 playlist adds', metricLabel: 'Playlist adds', target: 10 },
      { title: 'Reach 25k SoundCloud plays', metricLabel: 'Plays', target: 25000 },
    ],
    mantra: 'A finished track on SoundCloud beats a perfect one in your project folder.',
  },
  {
    id: 'composer', name: 'Song Composer / Original Artist', emoji: '🎼', tagline: 'The full package — write, record, release.',
    blurb: 'Complete original songs: your lyrics, your melodies, your world.',
    platforms: ['Spotify', 'Apple Music', 'YouTube', 'Instagram'],
    cadence: '1 single every 4–6 weeks',
    northMetric: 'Monthly listeners & saves',
    superpower: 'A catalog that’s 100% yours — highest ceiling, deepest fan loyalty.',
    watchout: 'Dropping a song and vanishing. Promote for 2 weeks before the next one.',
    phases: [
      { name: 'Foundation', when: 'months 1–3', steps: ['Write 12 songs — pick your best 4–5', 'Define your artist identity', 'Learn to demo at home'] },
      { name: 'Momentum', when: 'months 3–6', steps: ['Release singles on a schedule', 'Build a pre-save + release-day routine', 'Tease each song with 3–4 clips'] },
      { name: 'First break', when: 'the goal', steps: ['Land editorial/big indie playlist', 'Cross 10k monthly listeners', 'Get press or a sync placement'] },
      { name: 'Scale', when: 'after the break', steps: ['Release a full EP with a rollout', 'Play a hometown headline show', 'Build a team: distro, PR, manager'] },
    ],
    nextSteps: [
      { title: 'Write 12 songs this season', metricLabel: 'Songs written', target: 12 },
      { title: 'Release 4 singles', metricLabel: 'Singles released', target: 4 },
      { title: 'Hit 10k monthly listeners', metricLabel: 'Monthly listeners', target: 10000 },
    ],
    mantra: 'Nobody can copy your story. Put it in the songs.',
  },
  {
    id: 'cover', name: 'Cover Artist', emoji: '🎤', tagline: 'Borrow the song, keep the spotlight.',
    blurb: 'Reimagine songs people already love — and get discovered in their search.',
    platforms: ['YouTube', 'Instagram', 'TikTok', 'Spotify (licensed)'],
    cadence: '1–2 covers/week',
    northMetric: 'Subscribers & returning viewers',
    superpower: 'You ride existing demand — millions already search these songs.',
    watchout: 'Covers get views, not identity. Add YOUR twist so people follow you.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: ['Choose a lane: unplugged, genre-flip, mashups', 'Cover songs trending THIS week', 'Add a signature arrangement'] },
      { name: 'Momentum', when: 'weeks 5–12', steps: ['Post consistently, pin your best', 'Slip one original in between', 'Engage the original artists’ fans'] },
      { name: 'First break', when: 'the goal', steps: ['Get noticed by the original artist’s fans', 'Cross 10k subscribers', 'Release your first original'] },
      { name: 'Scale', when: 'after the break', steps: ['License covers to Spotify', 'Move fans from covers → originals', 'Build a channel brand'] },
    ],
    nextSteps: [
      { title: 'Post 8 covers', metricLabel: 'Covers posted', target: 8 },
      { title: 'Reach 10k subscribers', metricLabel: 'Subscribers', target: 10000 },
      { title: 'Release 1 original', metricLabel: 'Originals released', target: 1 },
    ],
    mantra: 'Come for the cover, stay for you. Always leave your fingerprint.',
  },
]

export const getArchetype = (id) => ARCHETYPES.find((a) => a.id === id) || null

const MOTIVATIONS = [
  'Every superstar was once a beginner who refused to quit.',
  'Consistency beats talent that shows up late.',
  'The first 100 fans are the hardest — and the most important.',
  'You don’t need permission to start. You need a phone and a reason.',
  'Small posts, stacked daily, become an undeniable body of work.',
  'Done and shared beats perfect and hidden — every single time.',
  'Show up on the days you don’t feel like it. That’s where the gap closes.',
]

export const motivationForToday = () => {
  const day = Math.floor(Date.now() / 86400000)
  return MOTIVATIONS[day % MOTIVATIONS.length]
}
