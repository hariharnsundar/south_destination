import { ArrowUpRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import WhatsAppLink from './WhatsAppLink.jsx'
import VehiclePhoto from './VehiclePhoto.jsx'
import { vehicleTariffRules } from '../data/vehicles.js'
import { site } from '../data/site.js'

const formatRupees = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(amount)

export default function VehicleCard({ vehicle, index = 0, homeFeature = false }) {
  const enquiryMessage = `${vehicle.whatsappMessage}\n\nVehicle: ${vehicle.name} — ${vehicle.seating}\nTariff: Day rent ${formatRupees(vehicle.pricing.below300Km.dayRent)}/day; up to ${vehicleTariffRules.includedKmPerDay} km ${formatRupees(vehicle.pricing.below300Km.perKm)}/km; above ${vehicleTariffRules.includedKmPerDay} km ${formatRupees(vehicle.pricing.above300Km.perKm)}/km.\nHill Station Charge: ${formatRupees(vehicle.hillStationCharge)}`

  return (
    <motion.article className={`vehicle-card${homeFeature ? ' vehicle-card-home' : ''}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}>
      <div className="vehicle-image-wrap">
        <VehiclePhoto vehicle={vehicle} fitContain={homeFeature && vehicle.id === 'tempo-traveller'} />
      </div>
      <div className="vehicle-body">
        <div className="vehicle-heading"><h3>{vehicle.name}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
        <p>{vehicle.description}</p>
        <div className="vehicle-specs"><span>{vehicle.seating}</span><span>{vehicle.airConditioning}</span></div>
        <div className="vehicle-pricing">
          <section className="vehicle-price-box" aria-label={`Up to ${vehicleTariffRules.includedKmPerDay} kilometres per day pricing`}>
            <h4>Up to {vehicleTariffRules.includedKmPerDay} KM/day</h4>
            <dl>
              <div><dt>Day Rent</dt><dd>{formatRupees(vehicle.pricing.below300Km.dayRent)}<small>/day</small></dd></div>
              <div><dt>Per KM</dt><dd>{formatRupees(vehicle.pricing.below300Km.perKm)}<small>/km</small></dd></div>
            </dl>
          </section>
          <section className="vehicle-price-box vehicle-price-box-long" aria-label={`Above ${vehicleTariffRules.includedKmPerDay} kilometres per day pricing`}>
            <h4>Above {vehicleTariffRules.includedKmPerDay} KM/day</h4>
            <dl><div><dt>Per KM</dt><dd>{formatRupees(vehicle.pricing.above300Km.perKm)}<small>/km</small></dd></div></dl>
          </section>
        </div>
        {homeFeature && <div className="vehicle-hill-charge"><span>Hill Station Charge</span><strong>{formatRupees(vehicle.hillStationCharge)}</strong></div>}
        {homeFeature ? (
          <div className="vehicle-card-actions">
            <WhatsAppLink className="card-action vehicle-enquiry-action" message={enquiryMessage}>Enquiry</WhatsAppLink>
            {site.phone && <a className="button vehicle-call-action" href={`tel:${site.phone}`}><Phone size={15} aria-hidden="true" /><span>Call Now</span></a>}
          </div>
        ) : (
          <WhatsAppLink className="card-action" message={enquiryMessage}>Enquire Now</WhatsAppLink>
        )}
      </div>
    </motion.article>
  )
}
