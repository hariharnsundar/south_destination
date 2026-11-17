import { useState } from 'react'
import { ArrowUpRight, Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import PageIntro from '../components/PageIntro.jsx'
import { site } from '../data/site.js'
import { vehicles } from '../data/vehicles.js'
import { whatsappUrl } from '../utils/whatsapp.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      'Hello South Destination, I would like to enquire about a trip.',
      `Name: ${formData.get('name')}`,
      `Mobile: ${formData.get('mobile')}`,
      `Destination: ${formData.get('destination')}`,
      `Travel date: ${formData.get('date') || 'Flexible'}`,
      `Passengers: ${formData.get('passengers')}`,
      `Vehicle preference: ${formData.get('vehicle') || 'Please suggest'}`,
      `Message: ${formData.get('message') || 'No additional message'}`,
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <>
      <PageIntro eyebrow="WE’RE JUST A MESSAGE AWAY" title="Let’s talk about your next trip." text="Tell us a little about where you’re headed. We’ll help you figure out the details." />
          <section className="section-pad contact-page"><div className="page-shell contact-layout"><div className="contact-details"><p className="eyebrow">GET IN TOUCH</p><h2>We’d love to<br /><em>hear from you.</em></h2><p className="contact-intro">Whether you know exactly where you’re going or just need a little inspiration, start the conversation with us.</p><div className="contact-detail-list"><a className="contact-detail" href={site.maps} target="_blank" rel="noreferrer"><span><MapPin size={20} /></span><div><small>FIND US</small><strong>{site.location}</strong></div><ArrowUpRight size={17} /></a>{site.phone ? <a className="contact-detail" href={`tel:${site.phone}`}><span><Phone size={20} /></span><div><small>CALL US</small><strong>{site.phoneDisplay || site.phone}</strong></div><ArrowUpRight size={17} /></a> : <div className="contact-detail is-pending"><span><Phone size={20} /></span><div><small>CALL US</small><strong>Phone number to be added</strong></div></div>}{site.email ? <a className="contact-detail" href={`mailto:${site.email}`}><span><Mail size={20} /></span><div><small>EMAIL</small><strong>{site.email}</strong></div><ArrowUpRight size={17} /></a> : <div className="contact-detail is-pending"><span><Mail size={20} /></span><div><small>EMAIL</small><strong>Email address to be added</strong></div></div>}<div className="contact-detail"><span><Clock3 size={20} /></span><div><small>AVAILABILITY</small><strong>Message us to discuss your plans</strong></div></div></div><div className="contact-socials"><span>Follow along</span>{site.instagram ? <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a> : <span className="social-pending" title="Instagram URL to be added"><Instagram size={19} /></span>}{site.facebook ? <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={19} /></a> : <span className="social-pending" title="Facebook URL to be added"><Facebook size={19} /></span>}</div><a className="button button-whatsapp contact-whatsapp" href={whatsappUrl('Hello South Destination, I would like to plan a trip. Please share the details.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Message us on WhatsApp <ArrowUpRight size={16} /></a></div>
          <form className="enquiry-form" onSubmit={handleSubmit}><div className="form-heading"><div><p className="eyebrow">PLAN A JOURNEY</p><h2>Send us the details.</h2></div><span>01 / ENQUIRY</span></div><div className="form-grid"><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>Mobile number<input name="mobile" type="tel" autoComplete="tel" placeholder="Your contact number" pattern="[+0-9() -]{7,20}" required /></label><label className="form-wide">Travel destination<input name="destination" placeholder="Where would you like to go?" required /></label><label>Travel date<input name="date" type="date" /></label><label>Passengers<input name="passengers" type="number" min="1" max="100" placeholder="Number of travellers" required /></label><label className="form-wide">Vehicle preference<select name="vehicle" defaultValue=""><option value="">Please suggest</option>{vehicles.map((vehicle) => <option key={vehicle.name}>{vehicle.name}</option>)}</select></label><label className="form-wide">Anything else we should know?<textarea name="message" rows="4" placeholder="A little about your plans..." /></label></div><button className="button button-primary submit-button" type="submit">{submitted ? 'Open WhatsApp again' : 'Continue to WhatsApp'} <Send size={16} /></button><p className="form-note">Your details are not saved here. Submitting opens WhatsApp with your enquiry for you to review and send.</p></form></div></section>
      <section className="map-band"><div className="map-placeholder"><div className="map-grid" /><span className="map-pin"><MapPin size={24} /></span><div className="map-caption"><small>BASED IN</small><strong>Madurai, Tamil Nadu</strong><a href={site.maps} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={14} /></a></div></div></section>
    </>
  )
}
