import { motion } from 'framer-motion'
import TravelImage from './TravelImage.jsx'

export default function PageIntro({ eyebrow, title, text, image, alt }) {
  return (
    <section className="page-intro" aria-label={title}>
      <TravelImage className="page-intro-image" src={image} alt={alt} />
      <div className="page-intro-shade" />
      <motion.div className="page-intro-content page-shell" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </section>
  )
}