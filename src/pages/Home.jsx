import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, CarFront, Compass, MapPinned, ShieldCheck, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import VehicleCard from '../components/VehicleCard.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import { vehicles } from '../data/vehicles.js'
import { destinations } from '../data/destinations.js'
import { site } from '../data/site.js'
import { maduraiPanorama, maduraiPanoramaAlt } from '../utils/images.js'
import { bookingMessage } from '../utils/whatsapp.js'
import TravelImage from '../components/TravelImage.jsx'
import TripCostCalculator from '../components/TripCostCalculator.jsx'

const reasons = [
  { icon: BadgeCheck, title: 'Experienced drivers', text: 'A professional driver team for the road ahead.' },
  { icon: CarFront, title: 'Comfort you can count on', text: 'Well-kept vehicle options for different kinds of journeys.' },
  { icon: ShieldCheck, title: 'Travel with confidence', text: 'Thoughtful planning and dependable support throughout.' },
  { icon: MapPinned, title: 'Local knowledge', text: 'Madurai-based help for city rides and outstation routes.' },
  { icon: UsersRound, title: 'Made for your group', text: 'Choose a vehicle and plan that suit your travellers.' },
  { icon: Compass, title: 'Flexible itineraries', text: 'Share your plans and shape a trip around your priorities.' },
]

const gallery = [
  { image: 'photo-1500534623283-312aade485b7', alt: 'A road leading into a green mountain valley' },
  { image: 'photo-1516483638261-f4dbaf036963', alt: 'Colorful South Indian hill town on a hillside' },
  { image: 'photo-1500375592092-40eb2168fd21', alt: 'Quiet coastal waves during a seaside journey' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
          <TravelImage className="hero-image" src={maduraiPanorama} alt={maduraiPanoramaAlt} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <p className="eyebrow eyebrow-light"><span /> SOUTH DESTINATION TOURS AND TRAVELS</p>
            <h1>Explore more.<br /><em>Travel comfortably.</em></h1>
            <p className="hero-lede">Your trusted travel partner for local journeys, outstation trips and unforgettable experiences.</p>
            <div className="hero-actions">
              <Link className="button button-light" to="/vehicles">Explore our vehicles <ArrowRight size={17} /></Link>
              <WhatsAppLink message={bookingMessage()}>Book your trip</WhatsAppLink>
            </div>
            <div className="hero-note"><span className="hero-note-line" /> Based in {site.location}</div>
          </motion.div>
        </div>
        <a className="hero-scroll" href="#fleet"><span>Scroll to discover</span><ArrowDown size={16} /></a>
        <div className="hero-count"><span>01</span><i /> 06 PAGES OF POSSIBILITY</div>
      </section>

      <motion.section className="fleet-section section-pad" id="fleet" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="page-shell">
          <div className="section-heading heading-inline"><div><p className="eyebrow">OUR FLEET</p><h2>Choose Your Vehicle</h2><p className="heading-note">Comfortable and reliable vehicles for your journey.</p></div><Link className="text-action" to="/vehicles">View All Vehicles <ArrowUpRight size={16} /></Link></div>
          <div className="vehicle-grid vehicle-grid-home">{vehicles.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} homeFeature />)}</div>
        </div>
      </motion.section>

      <TripCostCalculator />

      <motion.section className="why-section section-pad" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="page-shell why-layout">
          <div className="why-intro"><p className="eyebrow eyebrow-light">THE SOUTH DESTINATION DIFFERENCE</p><h2>Small details.<br /><em>Better journeys.</em></h2><p>We believe a comfortable trip is built from the little things: clear plans, a suitable vehicle and people who care about getting you there.</p><Link className="button button-outline-light" to="/about">Why travel with us <ArrowRight size={16} /></Link></div>
          <div className="reason-grid">{reasons.map(({ icon: Icon, title, text }, index) => <article className="reason-item" key={title}><span className="reason-number">0{index + 1}</span><Icon size={22} strokeWidth={1.6} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </motion.section>

      <motion.section className="destination-section section-pad" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="page-shell">
          <div className="section-heading heading-inline"><div><p className="eyebrow">A LITTLE CLOSER TO SOMEWHERE NEW</p><h2>South India is<br />calling.</h2></div><Link className="text-action" to="/destinations">See all destinations <ArrowUpRight size={16} /></Link></div>
          <div className="destination-grid destination-grid-home">{destinations.slice(0, 4).map((destination, index) => <DestinationCard key={destination.name} destination={destination} index={index} />)}</div>
        </div>
      </motion.section>

      <motion.section className="experience-section" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="experience-copy"><p className="eyebrow eyebrow-light">THE JOURNEY IS PART OF IT</p><h2>More than a<br />place on the map.</h2><p>Shared playlists. A tea stop that turns into a favorite memory. The small moments that make a trip yours.</p><Link to="/destinations" className="button button-light">Find your next stop <ArrowRight size={16} /></Link></div>
        <div className="experience-gallery">{gallery.map((item, index) => <div className={`gallery-image gallery-image-${index + 1}`} key={item.image}><TravelImage id={item.image} width={900} alt={item.alt} loading="lazy" /><span>0{index + 1}</span></div>)}</div>
      </motion.section>

      <motion.section className="testimonial-section section-pad section-warm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="page-shell testimonial-inner"><p className="eyebrow">A NOTE FROM THE ROAD</p><span className="demo-label">SAMPLE · DEMO COPY</span><blockquote>“The best journeys leave you with more than just photographs.”</blockquote><p className="testimonial-note">Illustrative sample copy, not a customer review. This section can be updated with verified feedback.</p><Link className="text-action" to="/contact">Start planning your trip <ArrowUpRight size={16} /></Link></div>
      </motion.section>

      <motion.section className="final-cta section-pad" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
        <div className="page-shell cta-inner"><div><p className="eyebrow eyebrow-light">YOUR NEXT STORY STARTS HERE</p><h2>Where shall we<br /><em>take you?</em></h2></div><div className="cta-side"><p>Share your destination, travel date and the people coming along. We’ll take it from there.</p><WhatsAppLink message={bookingMessage()}>Plan with us on WhatsApp</WhatsAppLink><span>South Destination · Madurai</span></div></div>
      </motion.section>
    </>
  )
}
