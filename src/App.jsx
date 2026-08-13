import { useMemo, useState } from 'react'
import { useStore, useTheme } from './store'
import Icon from './components/Icon'
import PinCard from './components/PinCard'
import GoalCard from './components/GoalCard'
import Dashboard from './components/Dashboard'
import PathView from './components/PathView'
import PinModal from './components/PinModal'
import GoalModal from './components/GoalModal'
import BoardModal from './components/BoardModal'
import { getArchetype } from './paths'

export default function App() {
  const [state, dispatch] = useStore()
  const [theme, toggleTheme] = useTheme()
  const { boards, pins, goals, profile } = state

  const [view, setView] = useState('dashboard') // 'dashboard' | 'ideas' | 'goals' | 'board:<id>'
  const [query, setQuery] = useState('')
  const [pinModal, setPinModal] = useState(null)   // { pin } | { new:true }
  const [goalModal, setGoalModal] = useState(null)
  const [boardModal, setBoardModal] = useState(null)

  const boardName = (id) => boards.find(b => b.id === id)?.name
  const activeBoardId = view.startsWith('board:') ? view.slice(6) : null
  const activeBoard = boards.find(b => b.id === activeBoardId)
  const archetype = getArchetype(profile?.archetype)

  const q = query.trim().toLowerCase()
  const matchPin = (p) =>
    !q || p.title.toLowerCase().includes(q) || p.note?.toLowerCase().includes(q) ||
    p.tags?.some(t => t.toLowerCase().includes(q))
  const matchGoal = (g) =>
    !q || g.title.toLowerCase().includes(q) || g.metricLabel?.toLowerCase().includes(q)

  const visiblePins = useMemo(() => pins
    .filter(p => (!activeBoardId || p.boardId === activeBoardId) && matchPin(p)),
    [pins, activeBoardId, q])

  const visibleGoals = useMemo(() => goals
    .filter(g => (!activeBoardId || g.boardId === activeBoardId) && matchGoal(g)),
    [goals, activeBoardId, q])

  // --- handlers ---
  const savePin = (data) => {
    if (pinModal?.pin) dispatch({ type: 'UPDATE_PIN', id: pinModal.pin.id, patch: data })
    else dispatch({ type: 'ADD_PIN', pin: data })
    setPinModal(null)
  }
  const saveGoal = (data) => {
    if (goalModal?.goal) dispatch({ type: 'UPDATE_GOAL', id: goalModal.goal.id, patch: data })
    else dispatch({ type: 'ADD_GOAL', goal: data })
    setGoalModal(null)
  }
  const saveBoard = (data) => {
    if (boardModal?.board) dispatch({ type: 'UPDATE_BOARD', id: boardModal.board.id, patch: data })
    else dispatch({ type: 'ADD_BOARD', board: data })
    setBoardModal(null)
  }

  const showGoals = view === 'goals' || activeBoardId
  const showPins = view === 'ideas' || view === 'dashboard' || activeBoardId

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand" onClick={() => setView('dashboard')} role="button">
          <span className="brand__mark"><Icon name="sparkles" size={20} /></span>
          <span className="brand__text">
            <span className="brand__name">Northstar</span>
            <span className="brand__tag">your pop-star era ✦</span>
          </span>
        </div>

        <nav className="nav">
          <NavItem active={view === 'dashboard'} onClick={() => setView('dashboard')} icon={<Icon name="compass" size={17} />} label="Dashboard" />
          <NavItem active={view === 'ideas'} onClick={() => setView('ideas')} icon={<Icon name="sparkles" size={17} />} label="All ideas" badge={pins.length} />
          <NavItem active={view === 'goals'} onClick={() => setView('goals')} icon={<Icon name="target" size={17} />} label="Goals" badge={goals.length} />
          <NavItem active={view === 'path'} onClick={() => setView('path')} icon={<Icon name="rocket" size={17} />} label="My Path" />
        </nav>

        <div className="nav__section">
          <div className="nav__heading">
            <span>Boards</span>
            <button className="chip-btn" title="New board" onClick={() => setBoardModal({ new: true })}><Icon name="plus" size={16} /></button>
          </div>
          {boards.map(b => (
            <NavItem
              key={b.id}
              active={activeBoardId === b.id}
              onClick={() => setView('board:' + b.id)}
              icon={b.emoji}
              label={b.name}
              badge={pins.filter(p => p.boardId === b.id).length}
            />
          ))}
        </div>

        <div className="sidebar__foot">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <button className="btn btn--ghost btn--sm" onClick={() => {
            if (confirm('Reset to the sample vision board? This clears your data.')) dispatch({ type: 'RESET' })
          }}>Reset demo</button>
          <p className="muted tiny">Saved in your browser · no account</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topbar__title">
            {view === 'dashboard' && <><h1>Your come-up starts here</h1><p className="muted">Turn bedroom demos into main-stage dreams — one goal at a time.</p></>}
            {view === 'ideas' && <><h1>All ideas</h1><p className="muted">{visiblePins.length} sparks of inspiration for your era</p></>}
            {view === 'goals' && <><h1>Goals</h1><p className="muted">{visibleGoals.length} milestones on the way to the top</p></>}
            {view === 'path' && <><h1>My Path {archetype && <span className="title-emoji">{archetype.emoji}</span>}</h1><p className="muted">{archetype ? `Your break-out plan as a ${archetype.name}` : 'Find your lane and your next moves'}</p></>}
            {activeBoard && <><h1>{activeBoard.emoji} {activeBoard.name}</h1><p className="muted">{activeBoard.description}</p></>}
          </div>
          <div className="topbar__tools">
            <div className="search">
              <Icon name="search" size={17} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search ideas & goals…" />
            </div>
            <button className="btn btn--primary" onClick={() => setPinModal({ new: true })}><Icon name="plus" size={16} /> Idea</button>
            <button className="btn btn--dark" onClick={() => setGoalModal({ new: true })}><Icon name="target" size={16} /> Goal</button>
          </div>
        </header>

        <div className="content">
          {view === 'path' && (
            <PathView profile={profile} boards={boards} dispatch={dispatch} />
          )}

          {view === 'dashboard' && (
            <Dashboard
              boards={boards} pins={pins} goals={goals} archetype={archetype}
              onJump={(target) => setView(target === 'boards' ? (boards[0] ? 'board:' + boards[0].id : 'ideas') : target)}
            />
          )}

          {activeBoard && (
            <div className="board-actions">
              <button className="btn btn--ghost btn--sm" onClick={() => setBoardModal({ board: activeBoard })}>Edit board</button>
              <button className="btn btn--ghost btn--sm btn--danger" onClick={() => {
                if (confirm(`Delete "${activeBoard.name}" and everything in it?`)) { dispatch({ type: 'DELETE_BOARD', id: activeBoard.id }); setView('dashboard') }
              }}>Delete board</button>
            </div>
          )}

          {showGoals && visibleGoals.length > 0 && (
            <>
              {activeBoardId && <h2 className="section-h"><Icon name="target" size={19} /> Goals</h2>}
              <div className="goals-grid">
                {visibleGoals.map(g => (
                  <GoalCard
                    key={g.id} goal={g} boardName={!activeBoardId && boardName(g.boardId)}
                    onEdit={(goal) => setGoalModal({ goal })}
                    onDelete={(id) => dispatch({ type: 'DELETE_GOAL', id })}
                    onToggleMilestone={(goalId, milestoneId) => dispatch({ type: 'TOGGLE_MILESTONE', goalId, milestoneId })}
                  />
                ))}
              </div>
            </>
          )}

          {view === 'goals' && visibleGoals.length === 0 && (
            <Empty icon={<Icon name="target" size={40} />} title="No goals yet" body="Turn a dream into a number: songs written, shows played, listeners reached." cta="Set your first goal" onCta={() => setGoalModal({ new: true })} />
          )}

          {showPins && (
            visiblePins.length > 0 ? (
              <>
                {activeBoardId && <h2 className="section-h"><Icon name="sparkles" size={19} /> Ideas</h2>}
                <div className="masonry">
                  {visiblePins.map(p => (
                    <PinCard
                      key={p.id} pin={p} boardName={!activeBoardId && boardName(p.boardId)}
                      onEdit={(pin) => setPinModal({ pin })}
                      onDelete={(id) => dispatch({ type: 'DELETE_PIN', id })}
                    />
                  ))}
                </div>
              </>
            ) : view !== 'dashboard' && (
              <Empty icon={<Icon name="sparkles" size={40} />} title="Nothing here yet" body={q ? 'No matches for your search.' : 'Pin the lyrics, looks, and dream shows that pull you forward.'} cta="Add an idea" onCta={() => setPinModal({ new: true })} />
            )
          )}
        </div>
      </main>

      {pinModal && (
        <PinModal boards={boards} initial={pinModal.pin} onSave={savePin} onClose={() => setPinModal(null)} />
      )}
      {goalModal && (
        <GoalModal boards={boards} initial={goalModal.goal} onSave={saveGoal} onClose={() => setGoalModal(null)} />
      )}
      {boardModal && (
        <BoardModal initial={boardModal.board} onSave={saveBoard} onClose={() => setBoardModal(null)} />
      )}
    </div>
  )
}

function NavItem({ active, onClick, icon, label, badge }) {
  return (
    <button className={`nav__item ${active ? 'is-active' : ''}`} onClick={onClick}>
      <span className="nav__icon">{icon}</span>
      <span className="nav__label">{label}</span>
      {badge > 0 && <span className="nav__badge">{badge}</span>}
    </button>
  )
}

function Empty({ icon, title, body, cta, onCta }) {
  return (
    <div className="empty">
      <div className="empty__icon">{icon}</div>
      <h3>{title}</h3>
      <p className="muted">{body}</p>
      {cta && <button className="btn btn--primary" onClick={onCta}>{cta}</button>}
    </div>
  )
}
