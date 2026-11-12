import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

export default function VehiclePhoto({ vehicle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <>
      {hasError ? (
        <div className="vehicle-image-pending">Photo unavailable</div>
      ) : (
        <button className="vehicle-photo-button" type="button" onClick={() => setIsOpen(true)} aria-label={`Enlarge ${vehicle.name} photo`}>
          <img src={vehicle.image} alt={vehicle.alt} loading="lazy" onError={() => setHasError(true)} />
        </button>
      )}
      {isOpen && createPortal(
        <div className="vehicle-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false) }}>
          <section className="vehicle-lightbox-panel" role="dialog" aria-modal="true" aria-label={`${vehicle.name} photo`}>
            <button className="vehicle-lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close enlarged photo"><X size={24} /></button>
            <img src={vehicle.image} alt={vehicle.alt} />
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}
