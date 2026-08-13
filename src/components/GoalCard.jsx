import Icon from './Icon'

export default function GoalCard({ goal, boardName, onEdit, onDelete, onToggleMilestone }) {
  const pct = goal.target > 0 ? Math.min(100, Math.round((goal.current / goal.target) * 100)) : 0
  const done = goal.milestones?.filter(m => m.done).length ?? 0
  const total = goal.milestones?.length ?? 0

  const daysLeft = goal.dueDate
    ? Math.ceil((new Date(goal.dueDate) - new Date()) / 86400000)
    : null
  const overdue = daysLeft !== null && daysLeft < 0 && pct < 100

  const fmt = (n) => goal.unit === '$' ? `$${Number(n).toLocaleString()}` : `${n}${goal.unit || ''}`

  return (
    <article className={`goal ${pct >= 100 ? 'goal--complete' : ''}`}>
      <div className="goal__head">
        <div>
          <h3 className="goal__title">{goal.title}</h3>
          {boardName && <span className="goal__board">{boardName}</span>}
        </div>
        <div className="goal__tools">
          <button className="chip-btn" title="Edit" onClick={() => onEdit(goal)}><Icon name="edit" size={15} /></button>
          <button className="chip-btn chip-btn--danger" title="Delete" onClick={() => onDelete(goal.id)}><Icon name="close" size={15} /></button>
        </div>
      </div>

      <div className="goal__metric">
        <span className="goal__metric-label">{goal.metricLabel || 'Progress'}</span>
        <span className="goal__metric-val">{fmt(goal.current)} <span className="muted">/ {fmt(goal.target)}</span></span>
      </div>

      <div className="progress">
        <div className="progress__bar" style={{ width: `${pct}%` }} />
        <span className="progress__pct">{pct}%</span>
      </div>

      <div className="goal__footer">
        {total > 0 && <span className="muted">✓ {done}/{total} milestones</span>}
        {daysLeft !== null && (
          <span className={overdue ? 'goal__due goal__due--over' : 'goal__due'}>
            {pct >= 100 ? '🎉 Done' : overdue ? `${Math.abs(daysLeft)}d overdue` : `${daysLeft}d left`}
          </span>
        )}
      </div>

      {total > 0 && (
        <ul className="milestones">
          {goal.milestones.map(m => (
            <li key={m.id}>
              <label>
                <input type="checkbox" checked={m.done} onChange={() => onToggleMilestone(goal.id, m.id)} />
                <span className={m.done ? 'struck' : ''}>{m.title}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
