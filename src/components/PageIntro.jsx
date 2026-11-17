import { motion } from 'framer-motion'
import TravelImage from './TravelImage.jsx'
import { maduraiPanorama, maduraiPanoramaAlt } from '../utils/images.js'

export default function PageIntro({ eyebrow, title, text, className = '' }) {
  return (
    <section className={`page-intro ${className}`.trim()} aria-label={title}>
      <TravelImage className="page-intro-image" src={maduraiPanorama} alt={maduraiPanoramaAlt} />
      <div className="page-intro-shade" />
      <motion.div className="page-intro-content page-shell" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </section>
  )
}
