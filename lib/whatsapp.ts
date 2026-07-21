import type { Property } from '@/lib/properties'
import { formatPrice } from '@/lib/properties'
import { siteConfig, whatsappLink } from '@/lib/site'

export type PropertyMessageAction = 'interest' | 'visit' | 'info'

const actionMessages: Record<PropertyMessageAction, string> = {
  interest: 'Tenho interesse neste imóvel',
  visit: 'Gostaria de agendar uma visita',
  info: 'Gostaria de receber mais informações',
}

function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  return 'https://site-helena-mere.vercel.app'
}

export function buildPropertyMessage(
  property: Property,
  action: PropertyMessageAction = 'interest',
): string {
  const baseUrl = getBaseUrl()
  const url = `${baseUrl}/imoveis/${property.slug}`
  const actionText = actionMessages[action]

  return [
    `Olá!`,
    '',
    `${actionText}.`,
    '',
    `📋 REF: ${property.ref || '—'}`,
    `${property.title}`,
    `💰 ${formatPrice(property.price)}`,
    `📍 ${property.neighborhood}, ${property.city}`,
    '',
    `🔗 ${url}`,
    '',
    `Gostaria de receber mais informações.`,
  ].join('\n')
}

export function propertyWhatsAppLink(
  property: Property,
  action: PropertyMessageAction = 'interest',
): string {
  const message = buildPropertyMessage(property, action)
  return whatsappLink(message)
}
