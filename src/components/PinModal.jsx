import { useState } from 'react'
import Modal from './Modal'

export default function PinModal({ boards, initial, onSave, onClose }) {
  const [form, setForm] = useState(() => ({
    title: initial?.title || '',
    note: initial?.note || '',
    imageUrl: initial?.imageUrl || '',
    link: initial?.link || '',
    tags: initial?.tags?.join(', ') || '',
    boardId: initial?.boardId || boards[0]?.id || '',
  }))

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = () => {
    if (!form.title.trim()) return
    onSave({
      ...form,
      title: form.title.trim(),
      tags: form.tags.split(',').map(t => t.trim().replace(/^#/, '')).filter(Boolean),
    })
  }

  return (
    <Modal
      title={initial ? 'Edit idea' : 'Add an idea'}
      onClose={onClose}
      footer={
        <>
          <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn--primary" onClick={submit} disabled={!form.title.trim()}>
            {initial ? 'Save' : 'Pin it'}
          </button>
        </>
      }
    >
      <label className="field">
        <span>Title *</span>
        <input autoFocus value={form.title} onChange={set('title')} placeholder="A lyric, a look, a dream show…" />
      </label>
      <label className="field">
        <span>Note</span>
        <textarea rows={2} value={form.note} onChange={set('note')} placeholder="Why does this matter to you?" />
      </label>
      <label className="field">
        <span>Board</span>
        <select value={form.boardId} onChange={set('boardId')}>
          {boards.map(b => <option key={b.id} value={b.id}>{b.emoji} {b.name}</option>)}
        </select>
      </label>
      <div className="field-row">
        <label className="field">
          <span>Image URL <span className="muted">(optional)</span></span>
          <input value={form.imageUrl} onChange={set('imageUrl')} placeholder="Paste a link, or leave blank" />
        </label>
        <label className="field">
          <span>Link <span className="muted">(optional)</span></span>
          <input value={form.link} onChange={set('link')} placeholder="https://…" />
        </label>
      </div>
      <label className="field">
        <span>Tags <span className="muted">(comma separated)</span></span>
        <input value={form.tags} onChange={set('tags')} placeholder="lyrics, live, dream" />
      </label>
      <p className="hint">💡 No image? Northstar makes a soft gradient cover automatically.</p>
    </Modal>
  )
}
