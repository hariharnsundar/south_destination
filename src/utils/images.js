export function imageUrl(id, width = 1000) {
  if (/^https?:\/\//.test(id)) return id
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`
}
