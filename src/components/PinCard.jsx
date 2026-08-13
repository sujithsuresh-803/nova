import { useState } from 'react'
import { gradientFor } from '../store'
import Icon from './Icon'

export default function PinCard({ pin, boardName, onEdit, onDelete }) {
  const [imgFailed, setImgFailed] = useState(false)
  const [g1, g2] = gradientFor(pin.title + pin.id)
  const showImage = pin.imageUrl && !imgFailed

  return (
    <article className="pin">
      <div className="pin__media">
        {showImage ? (
          <img src={pin.imageUrl} alt={pin.title} loading="lazy" onError={() => setImgFailed(true)} />
        ) : (
          <div className="pin__gradient" style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}>
            <span className="pin__spark"><Icon name="sparkles" size={30} /></span>
          </div>
        )}
        <div className="pin__actions">
          <button className="chip-btn" title="Edit" onClick={() => onEdit(pin)}><Icon name="edit" size={15} /></button>
          <button className="chip-btn chip-btn--danger" title="Delete" onClick={() => onDelete(pin.id)}><Icon name="close" size={15} /></button>
        </div>
      </div>
      <div className="pin__body">
        <h3 className="pin__title">{pin.title}</h3>
        {pin.note && <p className="pin__note">{pin.note}</p>}
        <div className="pin__meta">
          {boardName && <span className="pin__board">{boardName}</span>}
          {pin.link && (
            <a className="pin__link" href={pin.link} target="_blank" rel="noreferrer">Open <Icon name="external" size={13} /></a>
          )}
        </div>
        {pin.tags?.length > 0 && (
          <div className="pin__tags">
            {pin.tags.map(t => <span key={t} className="tag">#{t}</span>)}
          </div>
        )}
      </div>
    </article>
  )
}
