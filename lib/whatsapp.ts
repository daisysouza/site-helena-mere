import type { Property } from '@/lib/properties'
import { formatPrice } from '@/lib/properties'
import { whatsappLink } from '@/lib/site'

function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  return 'https://site-helena-mere.vercel.app'
}

export function buildPropertyMessage(property: Property): string {
  const baseUrl = getBaseUrl()
  const url = `${baseUrl}/imoveis/${property.slug}`

  return [
    `✨${property.title}✨`,
    `📋 Referência: ${property.ref || '—'}`,
    `📍 ${property.neighborhood}, ${property.city}`,
    '',
    `🏡 ${property.description}`,
    ...(property.amenities.length > 0
      ? [
          '',
          ...property.amenities.map((item) => `▶️ ${item}`),
        ]
      : []),
    '',
    `🔗 ${url}`,
    '',
    `💵 ↘️Valor: ${formatPrice(property.price)}↙️ 💵`,
  ].join('\n')
}

export function propertyWhatsAppLink(property: Property): string {
  const message = buildPropertyMessage(property)
  return whatsappLink(message)
}
