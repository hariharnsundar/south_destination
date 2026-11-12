import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, MoveUpRight } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import WhatsAppLink from './WhatsAppLink.jsx'
import { bookingMessage } from '../utils/whatsapp.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" to="/" onClick={closeMenu} aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true"><span>SD</span></span>
          <span className="brand-copy"><strong>South Destination</strong><small>TRAVELS · MADURAI</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation" key={location.pathname}>
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {item.label}
            </NavLink>
          ))}
          <WhatsAppLink className="nav-book" message={bookingMessage()} icon={false}>Book a trip <MoveUpRight size={15} /></WhatsAppLink>
        </nav>
      </div>
    </header>
  )
}