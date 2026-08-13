// Curated "path" engine — no AI, just hand-authored roadmaps per creator archetype.
// Each archetype tells an aspiring musician: what their lane is, how people like
// them actually break out, the concrete next steps, and a mantra to keep going.

export const ARCHETYPES = [
  {
    id: 'reels',
    name: 'Reels Singer',
    emoji: '🎬',
    tagline: 'Short clips, big reach.',
    blurb: '15–60 second vocal moments engineered for the For You page.',
    platforms: ['Instagram Reels', 'TikTok', 'YouTube Shorts'],
    cadence: '1 clip/day · 5–7× a week',
    northMetric: 'Saves & shares per clip',
    superpower: 'Discovery is built into the platform — one clip can change your whole year.',
    watchout: 'Chasing every trend blurs your identity. Keep one recognizable “thing”.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: [
        'Pick ONE signature format (one-take chorus, harmony stacks, “songs that sound like…”)',
        'Batch-film 10 clips before you post a single one',
        'Fix the basics: soft front light + a $20 clip-on mic',
      ] },
      { name: 'Momentum', when: 'weeks 5–12', steps: [
        'Post daily at the same time so the algorithm learns you',
        'Reply to every comment in the first hour',
        'Double down on whatever format overperforms — kill the rest',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Get one clip past 100k views with a 1-second hook',
        'Convert viewers → followers with a clear “follow for part 2”',
        'Release the full version of your most-loved clip',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'Collab with a creator roughly your size',
        'Turn your top 3 clips into a Spotify single',
        'Start a Discord/close-friends list for superfans',
      ] },
    ],
    nextSteps: [
      { title: 'Film 10 clips this week', metricLabel: 'Clips filmed', target: 10, unit: '' },
      { title: 'Post daily for 30 days straight', metricLabel: 'Days posted', target: 30, unit: '' },
      { title: 'Reach 5,000 followers', metricLabel: 'Followers', target: 5000, unit: '' },
    ],
    mantra: 'The algorithm can’t discover what you never post. Ship the clip.',
  },
  {
    id: 'acoustic',
    name: 'Acoustic Singer-Songwriter',
    emoji: '🎸',
    tagline: 'Just you, an instrument, and the truth.',
    blurb: 'Intimate, lyric-first songs that make one person feel seen.',
    platforms: ['YouTube', 'Instagram', 'Spotify', 'Local venues'],
    cadence: '1 song or session video/week',
    northMetric: 'Watch-time & repeat listeners',
    superpower: 'Emotional connection. People don’t just hear you — they feel understood.',
    watchout: 'Great songs can hide in bad audio. Your recording quality is the bottleneck.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–6', steps: [
        'Write 4 songs you’d play even if no one listened',
        'Learn one clean recording setup (interface + one good mic)',
        'Film a “live from my room” series — consistency over polish',
      ] },
      { name: 'Momentum', when: 'months 2–4', steps: [
        'Play 3 open mics — get comfortable being watched',
        'Release covers to get discovered, originals to get remembered',
        'Collect emails at every show (a list you own beats followers)',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Land one song on an indie/acoustic playlist',
        'Sell out a 30–50 cap room in your city',
        'Get a song licensed for a video/podcast/short film',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'Book a mini regional tour of small rooms',
        'Release a cohesive EP with a visual identity',
        'Open for a bigger local act',
      ] },
    ],
    nextSteps: [
      { title: 'Write 4 originals', metricLabel: 'Songs written', target: 4, unit: '' },
      { title: 'Play 3 open mics', metricLabel: 'Open mics played', target: 3, unit: '' },
      { title: 'Grow email list to 100 fans', metricLabel: 'Email subscribers', target: 100, unit: '' },
    ],
    mantra: 'Write the song only you could write. That’s the one that travels.',
  },
  {
    id: 'instrumental',
    name: 'Instrumentalist',
    emoji: '🎹',
    tagline: 'Let the playing do the talking.',
    blurb: 'Instrument-only — covers, solos, loops, and technique that stops the scroll.',
    platforms: ['YouTube', 'Instagram', 'TikTok', 'Fiverr/session work'],
    cadence: '2–3 short performance clips/week',
    northMetric: 'Profile visits → saves',
    superpower: 'Skill is undeniable and universal — no language, no lyrics, no gatekeepers.',
    watchout: 'Impressive isn’t the same as memorable. Give people a reason to follow, not just clap.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: [
        'Pick a niche: a genre, a technique, or “X song on Y instrument”',
        'Film 8 short clips of your cleanest playing',
        'Learn basic multi-cam / close-up framing on your hands',
      ] },
      { name: 'Momentum', when: 'weeks 5–12', steps: [
        'Cover trending songs the week they blow up',
        'Post duet/“play over this” bait for other creators',
        'Offer to record parts for singers — build a network',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Get a clip stitched/duetted by a bigger creator',
        'Land your first paid session or remote-recording gig',
        'Release a signature original piece or arrangement',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'Sell loop/sample packs or sheet music/tabs',
        'Teach — a short course or paid lessons',
        'Become the go-to player for a scene or genre',
      ] },
    ],
    nextSteps: [
      { title: 'Post 8 performance clips', metricLabel: 'Clips posted', target: 8, unit: '' },
      { title: 'Cover 5 trending songs', metricLabel: 'Covers made', target: 5, unit: '' },
      { title: 'Book first 3 paid gigs', metricLabel: 'Paid gigs', target: 3, unit: '' },
    ],
    mantra: 'Practice in private, post in public. The reps compound both ways.',
  },
  {
    id: 'edm',
    name: 'EDM Producer',
    emoji: '🎧',
    tagline: 'Build the drop the world dances to.',
    blurb: 'Electronic tracks, remixes, and beats — made in the box, played everywhere.',
    platforms: ['SoundCloud', 'Spotify', 'TikTok', 'YouTube', 'Beatport'],
    cadence: 'Finish 1 track/2 weeks · clip weekly',
    northMetric: 'Playlist adds & track saves',
    superpower: 'You control the entire sound alone — no band, no studio, no permission needed.',
    watchout: 'Endless tweaking = zero releases. “Finished and shipped” beats “perfect and hidden”.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–8', steps: [
        'Finish 5 tracks start-to-end (finishing is the real skill)',
        'Master one genre/BPM lane before you branch out',
        'Learn a fast, repeatable mixdown checklist',
      ] },
      { name: 'Momentum', when: 'months 3–5', steps: [
        'Remix a track that’s trending right now',
        'Post studio “making the drop” clips — process is content',
        'Submit to SoundCloud reposts & smaller Spotify playlists',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Land on an editorial or big user playlist',
        'Get signed to a small label or a compilation',
        'Sell your first beats or get a vocal collab',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'Play your first DJ set / live show',
        'Drop sample packs & presets for passive income',
        'Build a release cadence a label can rely on',
      ] },
    ],
    nextSteps: [
      { title: 'Finish 5 full tracks', metricLabel: 'Tracks finished', target: 5, unit: '' },
      { title: 'Get 10 playlist adds', metricLabel: 'Playlist adds', target: 10, unit: '' },
      { title: 'Reach 25k SoundCloud plays', metricLabel: 'Plays', target: 25000, unit: '' },
    ],
    mantra: 'A finished track on SoundCloud beats a perfect one in your project folder.',
  },
  {
    id: 'composer',
    name: 'Song Composer / Original Artist',
    emoji: '🎼',
    tagline: 'The full package — write, record, release.',
    blurb: 'Complete original songs: your lyrics, your melodies, your world.',
    platforms: ['Spotify', 'Apple Music', 'YouTube', 'Instagram'],
    cadence: '1 single every 4–6 weeks',
    northMetric: 'Monthly listeners & saves',
    superpower: 'A catalog that’s 100% yours — the highest ceiling and the deepest fan loyalty.',
    watchout: 'Dropping a song and vanishing. Release + promote for 2 weeks before the next one.',
    phases: [
      { name: 'Foundation', when: 'months 1–3', steps: [
        'Write 12 songs — pick your best 4–5 for an EP',
        'Define your artist identity: sound, look, story',
        'Learn to demo at home so ideas never die in your head',
      ] },
      { name: 'Momentum', when: 'months 3–6', steps: [
        'Release singles on a schedule, not all at once',
        'Build a pre-save + release-day promo routine',
        'Tease each song with 3–4 short clips before it drops',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Get on editorial or a big independent playlist',
        'Cross 10k monthly listeners',
        'Get press/blog coverage or a sync placement',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'Release a full EP/album with a rollout',
        'Play a hometown headline show',
        'Build a team: distro, a PR contact, a manager',
      ] },
    ],
    nextSteps: [
      { title: 'Write 12 songs this season', metricLabel: 'Songs written', target: 12, unit: '' },
      { title: 'Release 4 singles', metricLabel: 'Singles released', target: 4, unit: '' },
      { title: 'Hit 10k monthly listeners', metricLabel: 'Monthly listeners', target: 10000, unit: '' },
    ],
    mantra: 'Nobody can copy your story. Put it in the songs.',
  },
  {
    id: 'cover',
    name: 'Cover Artist',
    emoji: '🎤',
    tagline: 'Borrow the song, keep the spotlight.',
    blurb: 'Reimagine songs people already love — and get discovered in their search.',
    platforms: ['YouTube', 'Instagram', 'TikTok', 'Spotify (licensed)'],
    cadence: '1–2 covers/week',
    northMetric: 'Subscribers & returning viewers',
    superpower: 'You ride existing demand — millions are already searching for these songs.',
    watchout: 'Covers get views, not identity. Add YOUR twist so people follow you, not the song.',
    phases: [
      { name: 'Foundation', when: 'weeks 1–4', steps: [
        'Choose a lane: unplugged, genre-flip, or mashups',
        'Cover songs trending THIS week (ride the search wave)',
        'Add a signature intro or arrangement people recognize',
      ] },
      { name: 'Momentum', when: 'weeks 5–12', steps: [
        'Post consistently and pin your best cover',
        'Slip one original in between every few covers',
        'Engage fan communities of the artists you cover',
      ] },
      { name: 'First break', when: 'the goal', steps: [
        'Get a cover noticed/shared by the original artist’s fans',
        'Cross 10k subscribers',
        'Release your first original to your cover audience',
      ] },
      { name: 'Scale', when: 'after the break', steps: [
        'License covers to release on Spotify (via a distributor)',
        'Transition fans from covers → your originals',
        'Build a recognizable channel brand',
      ] },
    ],
    nextSteps: [
      { title: 'Post 8 covers', metricLabel: 'Covers posted', target: 8, unit: '' },
      { title: 'Reach 10k subscribers', metricLabel: 'Subscribers', target: 10000, unit: '' },
      { title: 'Release 1 original', metricLabel: 'Originals released', target: 1, unit: '' },
    ],
    mantra: 'Come for the cover, stay for you. Always leave your fingerprint.',
  },
]

export const getArchetype = (id) => ARCHETYPES.find(a => a.id === id) || null

// Rotating, original motivation lines (no copyrighted quotes).
const MOTIVATIONS = [
  'Every superstar was once a beginner who refused to quit.',
  'Consistency beats talent that shows up late.',
  'The first 100 fans are the hardest — and the most important.',
  'You don’t need permission to start. You need a phone and a reason.',
  'Small posts, stacked daily, become an undeniable body of work.',
  'Someone out there needs to hear exactly the song only you can make.',
  'Progress you can measure is progress you can trust.',
  'Done and shared beats perfect and hidden — every single time.',
  'Your break won’t come from one big moment. It’ll come from a hundred small ones.',
  'Show up on the days you don’t feel like it. That’s where the gap closes.',
]

export const motivationForToday = () => {
  const day = Math.floor(Date.now() / 86400000)
  return MOTIVATIONS[day % MOTIVATIONS.length]
}
