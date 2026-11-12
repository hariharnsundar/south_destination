import { ArrowRight, HeartHandshake, Route, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import WhatsAppLink from '../components/WhatsAppLink.jsx'
import { imageUrl } from '../utils/images.js'
import { bookingMessage } from '../utils/whatsapp.js'
import { site } from '../data/site.js'
import TravelImage from '../components/TravelImage.jsx'

export default function About() {
  return (
    <>
      <PageIntro eyebrow="ROOTED IN MADURAI · READY FOR THE ROAD" title="Good journeys begin with good people." text="We bring a personal touch to travel planning, wherever your route takes you." image={imageUrl('photo-1500530855697-b586d89ba3ee', 1800)} alt="Green landscape along a scenic South India road" />
      <section className="section-pad"><div className="page-shell about-story"><div className="about-story-image"><TravelImage id="photo-1500648767791-00dcc994a43e" width={1000} alt="Smiling professional ready to welcome travellers" loading="lazy" /><span className="image-caption">PEOPLE MAKE THE JOURNEY</span></div><div className="about-story-copy"><p className="eyebrow">OUR STORY</p><h2>A Madurai welcome,<br /><em>wherever you’re headed.</em></h2><p>South Destination is a travel company based in Madurai, Tamil Nadu. We help travellers get where they want to go, with vehicle options and trip support for local visits, family plans, group outings and longer routes.</p><p>Our story is still being written with every journey. What stays constant is our belief that travel should feel welcoming, comfortable and considered from the first conversation.</p><Link className="text-action" to="/services">See how we can help <ArrowRight size={16} /></Link></div></div></section>
      <section className="about-values section-pad section-warm"><div className="page-shell"><div className="section-heading"><p className="eyebrow">WHAT GUIDES US</p><h2>Travel with intention.</h2></div><div className="values-grid"><article><span><HeartHandshake size={23} /></span><h3>Our mission</h3><p>Make every journey feel straightforward, comfortable and personal, with attentive travel support from Madurai.</p></article><article><span><Route size={23} /></span><h3>Our vision</h3><p>Be a trusted travel partner for people exploring Madurai and the wider landscapes of South India.</p></article><article><span><UsersRound size={23} /></span><h3>Our commitment</h3><p>Listen closely, help you choose with confidence and keep your travel plans centered on what matters to you.</p></article></div></div></section>
      <section className="team-section section-pad"><div className="page-shell team-layout"><div className="team-copy"><p className="eyebrow">THE PEOPLE BEHIND THE WHEEL</p><h2>A team that knows<br />the road <em>matters.</em></h2><p>Our team includes experienced and young drivers, supported by travel professionals who help coordinate your plans. Together, we’re {site.teamSize}, and we’re here to help make your trip feel easy from pickup to drop-off.</p><div className="team-fact"><strong>~10</strong><span>travel professionals<br />and drivers</span></div></div><div className="team-photo"><TravelImage id="photo-1521737711867-e3b97375f902" width={1200} alt="Colleagues working together as a professional team" loading="lazy" /><span>ONE TEAM · MANY DESTINATIONS</span></div></div></section>
      <section className="about-cta"><div className="page-shell about-cta-inner"><div><p className="eyebrow eyebrow-light">LET’S MAKE A PLAN</p><h2>Planning your next trip?</h2></div><WhatsAppLink message={bookingMessage()}>Contact us on WhatsApp</WhatsAppLink></div></section>
    </>
  )
}