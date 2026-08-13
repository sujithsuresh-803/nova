import { useState } from 'react'
import Modal from './Modal'

const EMOJIS = [
  '🎶', '🎤', '🦋', '💜', '🎧', '🎸', '🎹',
  '🌟', '🎬', '🎼', '💫', '🔥', '📸', '✨',
  '🎯', '📝', '🏆', '💿', '🎟️', '🌸', '👑',
  '💄', '🕶️', '🎀', '🚀', '❤️‍🔥', '🪩', '☁️',
]

export default function BoardModal({ initial, onSave, onClose }) {
  const [form, setForm] = useState(() => ({
    name: initial?.name || '',
    emoji: initial?.emoji || '🎶',
    description: initial?.description || '',
  }))

  const submit = () => {
    if (!form.name.trim()) return
    onSave({ ...form, name: form.name.trim() })
  }

  return (
    <Modal
      title={initial ? 'Edit board' : 'New board'}
      onClose={onClose}
      footer={
        <>
          <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn--primary" onClick={submit} disabled={!form.name.trim()}>
            {initial ? 'Save' : 'Create board'}
          </button>
        </>
      }
    >
      <label className="field">
        <span>Name *</span>
        <input autoFocus value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Songwriting" />
      </label>
      <label className="field">
        <span>Description</span>
        <input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="A line about what this board is for" />
      </label>
      <div className="field">
        <span>Cover emoji</span>
        <div className="emoji-grid">
          {EMOJIS.map(e => (
            <button
              key={e}
              className={`emoji-opt ${form.emoji === e ? 'is-active' : ''}`}
              onClick={() => setForm({ ...form, emoji: e })}
            >{e}</button>
          ))}
        </div>
      </div>
    </Modal>
  )
}
