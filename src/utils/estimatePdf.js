const toAscii = (value) => String(value)
  .replace(/₹/g, 'INR ')
  .replace(/[×–—]/g, (character) => ({ '×': 'x', '–': '-', '—': '-' })[character])
  .replace(/[^\x20-\x7E]/g, '')

const escapePdfText = (value) => toAscii(value).replace(/([\\()])/g, '\\$1')

export function downloadEstimatePdf(estimate, vehicle) {
  const money = (amount) => `INR ${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(amount)}`
  const lines = [
    'South Destination - Trip Cost Estimate',
    '',
    `Vehicle: ${vehicle.name}`,
    `Seating: ${vehicle.seating}`,
    `Distance: ${estimate.distance} km`,
    `Days: ${estimate.days}`,
    '',
    'Cost Breakdown',
  ]

  if (estimate.isAboveThreshold) {
    lines.push(
      `Extra KM (${estimate.distance} - ${estimate.thresholdKm}): ${estimate.extraKm} km`,
      `Above-300 tariff (${estimate.distance} km x ${money(estimate.extraKmRate)}/km): ${money(estimate.aboveThresholdCharge)}`,
      'Day cost is not included for distances above 300 km.',
    )
  } else {
    lines.push(
      `Day Cost: ${money(estimate.dayCost)}`,
      `KM Fare (${estimate.distance} km x ${money(estimate.perKmRate)}/km): ${money(estimate.perKmCharge)}`,
    )
  }

  lines.push(
    '',
    `Total Estimated Cost: ${money(estimate.total)}`,
    '',
    'This is a rough estimation. Final cost may vary based on actual route, toll charges,',
    'parking fees, and other applicable charges. For accurate pricing, please contact us.',
  )

  const commands = lines.map((line, index) => `BT /F1 ${index === 0 ? 18 : 11} Tf 54 ${790 - index * 28} Td (${escapePdfText(line)}) Tj ET`).join('\n')
  const stream = `q\n0.07 0.17 0.25 rg\n${commands}\nQ`
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ]
  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((object, index) => {
    offsets.push(pdf.length)
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
  })
  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n` })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  const blob = new Blob([pdf], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'south-destination-trip-estimate.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
