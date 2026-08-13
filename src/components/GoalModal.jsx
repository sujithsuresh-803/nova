import { useState } from 'react'
import Modal from './Modal'
import { uid } from '../store'

export default function GoalModal({ boards, initial, onSave, onClose }) {
  const [form, setForm] = useState(() => ({
    title: initial?.title || '',
    metricLabel: initial?.metricLabel || '',
    current: initial?.current ?? 0,
    target: initial?.target ?? 10,
    unit: initial?.unit || '',
    dueDate: initial?.dueDate || '',
    boardId: initial?.boardId || boards[0]?.id || '',
    milestones: initial?.milestones ? [...initial.milestones] : [],
  }))
  const [newMs, setNewMs] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const addMilestone = () => {
    if (!newMs.trim()) return
    setForm({ ...form, milestones: [...form.milestones, { id: uid(), title: newMs.trim(), done: false }] })
    setNewMs('')
  }
  const removeMilestone = (id) =>
    setForm({ ...form, milestones: form.milestones.filter(m => m.id !== id) })

  const submit = () => {
    if (!form.title.trim()) return
    onSave({
      ...form,
      title: form.title.trim(),
      current: Number(form.current) || 0,
      target: Number(form.target) || 0,
    })
  }

  return (
    <Modal
      title={initial ? 'Edit goal' : 'New goal'}
      onClose={onClose}
      footer={
        <>
          <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn--primary" onClick={submit} disabled={!form.title.trim()}>
            {initial ? 'Save' : 'Create goal'}
          </button>
        </>
      }
    >
      <label className="field">
        <span>Goal *</span>
        <input autoFocus value={form.title} onChange={set('title')} placeholder="e.g. Write 12 songs this season" />
      </label>
      <label className="field">
        <span>What are you measuring?</span>
        <input value={form.metricLabel} onChange={set('metricLabel')} placeholder="e.g. Monthly listeners" />
      </label>
      <div className="field-row">
        <label className="field">
          <span>Current</span>
          <input type="number" value={form.current} onChange={set('current')} />
        </label>
        <label className="field">
          <span>Target</span>
          <input type="number" value={form.target} onChange={set('target')} />
        </label>
        <label className="field field--sm">
          <span>Unit</span>
          <input value={form.unit} onChange={set('unit')} placeholder="$, kg…" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Board</span>
          <select value={form.boardId} onChange={set('boardId')}>
            {boards.map(b => <option key={b.id} value={b.id}>{b.emoji} {b.name}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Due date</span>
          <input type="date" value={form.dueDate} onChange={set('dueDate')} />
        </label>
      </div>

      <div className="field">
        <span>Milestones</span>
        <div className="ms-add">
          <input
            value={newMs}
            onChange={(e) => setNewMs(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addMilestone())}
            placeholder="Break it into steps…"
          />
          <button className="btn btn--ghost" onClick={addMilestone}>Add</button>
        </div>
        {form.milestones.length > 0 && (
          <ul className="ms-list">
            {form.milestones.map(m => (
              <li key={m.id}>
                <span>{m.done ? '✓ ' : '• '}{m.title}</span>
                <button className="chip-btn chip-btn--danger" onClick={() => removeMilestone(m.id)}>✕</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  )
}
