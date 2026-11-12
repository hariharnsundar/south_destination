import { imageUrl } from '../utils/images.js'

const fallbackImage = imageUrl('photo-1500530855697-b586d89ba3ee', 1000)

export default function TravelImage({ id, src, alt, width = 1000, ...props }) {
  return (
    <img
      src={src || imageUrl(id, width)}
      alt={alt}
      onError={(event) => {
        if (event.currentTarget.dataset.fallback) return
        event.currentTarget.dataset.fallback = 'true'
        event.currentTarget.src = fallbackImage
      }}
      {...props}
    />
  )
}