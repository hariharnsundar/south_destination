import { ArrowRight, HeartHandshake, Route, UsersRound, MapPin, CarFront, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageIntro from '../components/PageIntro.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { bookingMessage } from '../utils/whatsapp.js'
import { site } from '../data/site.js'
import TravelImage from '../components/TravelImage.jsx'

const values = [
  { icon: HeartHandshake, title: 'Our mission', text: 'Make every journey feel straightforward, comfortable and personal, with attentive travel support from Madurai.' },
  { icon: Route, title: 'Our vision', text: 'Be a trusted travel partner for people exploring Madurai and the wider landscapes of South India.' },
  { icon: UsersRound, title: 'Our commitment', text: 'Listen closely, help you choose with confidence and keep your travel plans centered on what matters to you.' },
]

const highlights = [
  { icon: MapPin, title: 'Rooted in Madurai', text: 'Local travel knowledge' },
  { icon: CarFront, title: 'Comfortable choices', text: 'Vehicles for different groups' },
  { icon: Compass, title: 'Plans shaped around you', text: 'Flexible journeys across the South' },
]

export default function About() {
  return (
    <>
      <PageIntro className="about-page-intro" eyebrow="ROOTED IN MADURAI · READY FOR THE ROAD" title="Good journeys begin with good people." text="We bring a personal touch to travel planning, wherever your route takes you." />

      <section className="about-story-section section-pad">
        <div className="page-shell about-story">
          <motion.div className="about-story-image" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
            <img src="/images/about/meenakshi-temple-gopuram.png" alt="Meenakshi Amman Temple and Madurai city, Tamil Nadu" loading="lazy" />
            <span className="image-caption">PEOPLE MAKE THE JOURNEY</span>
            <span className="about-image-index">SOUTH DESTINATION <i /> MADURAI</span>
          </motion.div>
          <motion.div className="about-story-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <p className="eyebrow">OUR STORY</p>
            <h2>A Madurai welcome,<br /><em>wherever you’re headed.</em></h2>
            <p>South Destination is a travel company based in Madurai, Tamil Nadu. We help travellers get where they want to go, with vehicle options and trip support for local visits, family plans, group outings and longer routes.</p>
            <p>Our story is still being written with every journey. What stays constant is our belief that travel should feel welcoming, comfortable and considered from the first conversation.</p>
            <Link className="text-action" to="/services">See how we can help <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="about-highlights" aria-label="About South Destination">
        <div className="page-shell about-highlights-grid">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div className="about-highlight" key={title}><span><Icon size={19} strokeWidth={1.7} /></span><div><strong>{title}</strong><small>{text}</small></div></div>
          ))}
        </div>
      </section>

      <section className="about-values section-pad section-warm">
        <div className="page-shell">
          <motion.div className="section-heading about-values-heading" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
            <p className="eyebrow">WHAT GUIDES US</p><h2>Travel with intention.</h2><p>Thoughtful travel starts with listening, local knowledge and a team that cares about the details.</p>
          </motion.div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                <span><Icon size={23} strokeWidth={1.6} /></span><small className="about-card-number">0{index + 1} / OUR VALUES</small><h3>{title}</h3><p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section section-pad">
        <div className="page-shell team-layout">
          <motion.div className="team-copy" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow">THE PEOPLE BEHIND THE WHEEL</p>
            <h2>A team that knows<br />the road <em>matters.</em></h2>
            <p>Our team includes experienced and young drivers, supported by travel professionals who help coordinate your plans. Together, we’re {site.teamSize}, and we’re here to help make your trip feel easy from pickup to drop-off.</p>
            <div className="team-fact"><strong>~10</strong><span>travel professionals<br />and drivers</span></div>
          </motion.div>
          <motion.div className="team-photo" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <TravelImage id="photo-1521737711867-e3b97375f902" width={1200} alt="Colleagues working together as a professional team" loading="lazy" />
            <span>ONE TEAM · MANY DESTINATIONS</span>
          </motion.div>
        </div>
      </section>

      <section className="about-cta">
        <div className="page-shell about-cta-inner"><div><p className="eyebrow eyebrow-light">LET’S MAKE A PLAN</p><h2>Planning your next trip?</h2></div><WhatsAppLink message={bookingMessage()}>Contact us on WhatsApp</WhatsAppLink></div>
      </section>
    </>
  )
}
