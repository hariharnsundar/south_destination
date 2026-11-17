export const maduraiPanorama = '/images/madurai-golden-temple-panorama.png'
export const maduraiPanoramaAlt = 'Madurai at sunset, with Meenakshi Amman Temple, Teppakulam, and Thirumalai Nayakkar Mahal'

export function imageUrl(id, width = 1000) {
  if (/^https?:\/\//.test(id)) return id
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`
}
