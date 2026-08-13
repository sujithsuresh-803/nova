import Icon from './Icon'

const clampPct = (g) => Math.min(100, Math.round((g.target > 0 ? g.current / g.target : 0) * 100))

export default function Dashboard({ boards, pins, goals, archetype, onJump }) {
  const activeGoals = goals.filter(g => clampPct(g) < 100)
  const completed = goals.length - activeGoals.length

  // North Star metric: average completion across all goals.
  const northStar = goals.length
    ? Math.round(goals.reduce((s, g) => s + Math.min(1, g.target > 0 ? g.current / g.target : 0), 0) / goals.length * 100)
    : 0

  // Goals in motion — sorted by how close they are to done (momentum first).
  const inMotion = [...activeGoals].sort((a, b) => clampPct(b) - clampPct(a))

  const soon = [...goals]
    .filter(g => g.dueDate && clampPct(g) < 100)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 4)

  const daysLeft = (d) => Math.ceil((new Date(d) - new Date()) / 86400000)
  const fmt = (g, n) => g.unit === '$' ? `$${Number(n).toLocaleString()}` : `${n}${g.unit || ''}`

  // Per-board aggregate progress.
  const boardProgress = (id) => {
    const bg = goals.filter(g => g.boardId === id)
    if (!bg.length) return null
    return Math.round(bg.reduce((s, g) => s + clampPct(g), 0) / bg.length)
  }
  const boardName = (id) => boards.find(b => b.id === id)?.name

  return (
    <div className="dash">
      {/* Hero */}
      <section className="northstar-card">
        <div className="ns-decor" aria-hidden="true">
          <span className="ns-decor__s1"><Icon name="sparkles" size={150} /></span>
          <span className="ns-decor__s2"><Icon name="sparkles" size={78} /></span>
          <span className="ns-decor__b1">🦋</span>
          <span className="ns-decor__b2">🦋</span>
          <span className="ns-decor__s3"><Icon name="music" size={54} /></span>
        </div>
        <div className="northstar-card__ring" style={{ '--pct': northStar }}>
          <div className="northstar-card__inner">
            <span className="northstar-card__num">{northStar}%</span>
            <span className="northstar-card__cap">North Star</span>
          </div>
        </div>
        <div className="northstar-card__text">
          <h2>You're on your way to the big stage. ✦</h2>
          <p className="muted">
            Your <strong>North Star metric</strong> is the average progress across every goal —
            one number that tells you if your come-up is trending up.
          </p>
          <div className="stat-row">
            <Stat n={boards.length} label="Boards" onClick={() => onJump('boards')} />
            <Stat n={pins.length} label="Ideas" onClick={() => onJump('ideas')} />
            <Stat n={activeGoals.length} label="In motion" onClick={() => onJump('goals')} />
            <Stat n={completed} label="Done" />
          </div>
        </div>
      </section>

      {/* Progress-forward main content */}
      <section className="dash__cols">
        {/* Goals in motion — the progress bars they asked for, front and center */}
        <div className="panel panel--wide">
          <div className="panel__head">
            <h3 className="panel__title"><Icon name="target" size={18} /> Goals in motion</h3>
            <button className="link-btn" onClick={() => onJump('goals')}>View all</button>
          </div>
          {inMotion.length === 0 && <p className="muted">Every goal is complete — time to dream up new ones. 🎉</p>}
          <ul className="motion-list">
            {inMotion.map(g => {
              const pct = clampPct(g)
              const d = g.dueDate ? daysLeft(g.dueDate) : null
              return (
                <li key={g.id} className="motion">
                  <div className="motion__top">
                    <span className="motion__title">{g.title}</span>
                    <span className="motion__val">{fmt(g, g.current)} <span className="muted">/ {fmt(g, g.target)}</span></span>
                  </div>
                  <div className="progress progress--lg">
                    <div className="progress__bar" style={{ width: `${pct}%` }} />
                    <span className="progress__pct">{pct}%</span>
                  </div>
                  <div className="motion__meta">
                    <span className="motion__board">{boardName(g.boardId)}</span>
                    {d !== null && (
                      <span className={d < 0 ? 'goal__due goal__due--over' : 'goal__due'}>
                        {d < 0 ? `${Math.abs(d)}d overdue` : `${d}d left`}
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right rail */}
        <div className="dash__rail">
          <button className="path-promo" onClick={() => onJump('path')}>
            <span className="path-promo__icon">{archetype ? archetype.emoji : <Icon name="rocket" size={22} />}</span>
            <span className="path-promo__text">
              <span className="path-promo__title">{archetype ? archetype.name : 'Find your path'}</span>
              <span className="path-promo__sub">{archetype ? 'See your next steps to a break' : 'What kind of artist are you?'}</span>
            </span>
            <Icon name="arrowRight" size={18} />
          </button>

          <div className="panel">
            <h3 className="panel__title"><Icon name="layers" size={17} /> Boards</h3>
            <ul className="board-brief">
              {boards.map(b => {
                const bp = pins.filter(p => p.boardId === b.id).length
                const prog = boardProgress(b.id)
                return (
                  <li key={b.id} onClick={() => onJump('board:' + b.id)}>
                    <div className="board-brief__row">
                      <span className="board-brief__emoji">{b.emoji}</span>
                      <span className="board-brief__name">{b.name}</span>
                      <span className="muted tiny">{bp} idea{bp === 1 ? '' : 's'}</span>
                    </div>
                    {prog !== null && (
                      <div className="progress progress--mini">
                        <div className="progress__bar" style={{ width: `${prog}%` }} />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="panel">
            <h3 className="panel__title"><Icon name="clock" size={17} /> Coming up</h3>
            {soon.length === 0 && <p className="muted">No deadlines yet — add a due date to a goal.</p>}
            <ul className="due-list">
              {soon.map(g => {
                const d = daysLeft(g.dueDate)
                return (
                  <li key={g.id}>
                    <span>{g.title}</span>
                    <span className={d < 0 ? 'goal__due goal__due--over' : 'goal__due'}>
                      {d < 0 ? `${Math.abs(d)}d over` : `${d}d`}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({ n, label, onClick }) {
  return (
    <button className="stat" onClick={onClick} disabled={!onClick}>
      <span className="stat__n">{n}</span>
      <span className="stat__l">{label}</span>
    </button>
  )
}
