import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { vehicles } from '../data/vehicles.js'
import WhatsAppLink from './WhatsAppLink.jsx'
import { bookingMessage } from '../utils/whatsapp.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-shell">
        <div className="footer-brand-col">
          <Link className="brand brand-inverted" to="/">
            <span className="brand-mark" aria-hidden="true"><span>SD</span></span>
            <span className="brand-copy"><strong>{site.name}</strong><small>TRAVELS · MADURAI</small></span>
          </Link>
          <p className="footer-tagline">{site.tagline}.</p>
          <p className="footer-description">Thoughtful travel from Madurai, for the places and moments worth making time for.</p>
          <WhatsAppLink className="footer-chat" message={bookingMessage()}>Plan your journey</WhatsAppLink>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          {navLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer-col">
          <h3>Our fleet</h3>
          {vehicles.map((vehicle) => <Link key={vehicle.name} to="/vehicles">{vehicle.name}</Link>)}
        </div>
        <div className="footer-col footer-contact">
          <h3>Get in touch</h3>
          <a href={site.maps} target="_blank" rel="noreferrer"><MapPin size={16} />{site.location}</a>
          {site.phone ? <a href={`tel:${site.phone}`}><Phone size={16} />{site.phoneDisplay || site.phone}</a> : <span><Phone size={16} />Phone details to be added</span>}
          {site.email ? <a href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a> : <span><Mail size={16} />Email details to be added</span>}
          <div className="social-links">
            {site.instagram ? <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18} /></a> : <span aria-label="Instagram details to be added"><Instagram size={18} /></span>}
            {site.facebook ? <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={18} /></a> : <span aria-label="Facebook details to be added"><Facebook size={18} /></span>}
            <a href={site.maps} aria-label="Madurai on Google Maps" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>{site.tagline}</span></div>
    </footer>
  )
}
