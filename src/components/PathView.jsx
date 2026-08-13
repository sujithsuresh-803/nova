import { useState } from 'react'
import Icon from './Icon'
import { ARCHETYPES, getArchetype, motivationForToday } from '../paths'

const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }

export default function PathView({ profile, boards, dispatch }) {
  const archetype = getArchetype(profile?.archetype)
  const [added, setAdded] = useState({}) // track which next-steps were turned into goals

  const choose = (id) => dispatch({ type: 'SET_ARCHETYPE', id })

  if (!archetype) {
    return (
      <div className="path">
        <div className="path-intro">
          <div className="path-intro__badge"><Icon name="rocket" size={26} /></div>
          <h2>What kind of artist are you?</h2>
          <p className="muted">Pick your lane and Northstar maps your path to a first break — the moves, the metric to watch, and your next steps.</p>
        </div>
        <div className="arch-grid">
          {ARCHETYPES.map(a => (
            <button key={a.id} className="arch-card" onClick={() => choose(a.id)}>
              <span className="arch-card__emoji">{a.emoji}</span>
              <span className="arch-card__name">{a.name}</span>
              <span className="arch-card__tagline">{a.tagline}</span>
              <span className="arch-card__blurb muted">{a.blurb}</span>
              <span className="arch-card__go">Choose this path <Icon name="arrowRight" size={14} /></span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const trackStep = (step, i) => {
    dispatch({ type: 'ADD_GOAL', goal: {
      boardId: boards[0]?.id,
      title: step.title,
      metricLabel: step.metricLabel,
      current: 0,
      target: step.target,
      unit: step.unit || '',
      dueDate: addDays(45),
      milestones: [],
    } })
    setAdded(prev => ({ ...prev, [i]: true }))
  }

  return (
    <div className="path">
      {/* Identity header */}
      <section className="path-hero">
        <span className="path-hero__emoji">{archetype.emoji}</span>
        <div className="path-hero__text">
          <span className="path-hero__eyebrow">Your path</span>
          <h2>{archetype.name}</h2>
          <p>{archetype.tagline}</p>
        </div>
        <button className="btn btn--ghost btn--sm" onClick={() => dispatch({ type: 'SET_ARCHETYPE', id: null })}>
          Change type
        </button>
      </section>

      {/* Motivation */}
      <div className="mantra">
        <span className="mantra__spark">✦</span>
        <div>
          <p className="mantra__line">{archetype.mantra}</p>
          <p className="mantra__today muted">Today: {motivationForToday()}</p>
        </div>
      </div>

      {/* How to make it big */}
      <h3 className="section-h"><Icon name="rocket" size={19} /> How you make it big</h3>
      <div className="path-facts">
        <Fact label="Your superpower" value={archetype.superpower} wide />
        <Fact label="Watch out for" value={archetype.watchout} wide />
        <Fact label="Where to post" value={archetype.platforms.join(' · ')} />
        <Fact label="Posting rhythm" value={archetype.cadence} />
        <Fact label="Metric to watch" value={archetype.northMetric} />
      </div>

      {/* The roadmap */}
      <h3 className="section-h"><Icon name="target" size={19} /> Your roadmap to a first break</h3>
      <ol className="timeline">
        {archetype.phases.map((p, i) => (
          <li key={i} className="tl-phase">
            <div className="tl-phase__dot">{i + 1}</div>
            <div className="tl-phase__body">
              <div className="tl-phase__head">
                <span className="tl-phase__name">{p.name}</span>
                <span className="tl-phase__when">{p.when}</span>
              </div>
              <ul className="tl-steps">
                {p.steps.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* Next steps → trackable goals */}
      <h3 className="section-h"><Icon name="music" size={19} /> Do these next</h3>
      <p className="muted section-sub">Turn any of these into a tracked goal — it’ll show up on your dashboard with a progress bar.</p>
      <div className="steps-grid">
        {archetype.nextSteps.map((s, i) => (
          <div className="step-card" key={i}>
            <div>
              <p className="step-card__title">{s.title}</p>
              <p className="step-card__meta muted">Tracks: {s.metricLabel} → {s.unit === '$' ? '$' : ''}{s.target.toLocaleString()}{s.unit && s.unit !== '$' ? ' ' + s.unit : ''}</p>
            </div>
            {added[i] ? (
              <span className="step-card__done"><Icon name="check" size={15} /> Added</span>
            ) : (
              <button className="btn btn--primary btn--sm" onClick={() => trackStep(s, i)}>Track this</button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Fact({ label, value, wide }) {
  return (
    <div className={`fact ${wide ? 'fact--wide' : ''}`}>
      <span className="fact__label">{label}</span>
      <span className="fact__value">{value}</span>
    </div>
  )
}
