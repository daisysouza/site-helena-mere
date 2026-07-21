export type PropertyBadge = 'Novo' | 'Exclusivo' | 'Oportunidade'

export type Property = {
  slug: string
  title: string
  type: 'Casa' | 'Apartamento' | 'Cobertura' | 'Terreno'
  status: 'Venda' | 'Aluguel'
  price: number
  neighborhood: string
  city: string
  bedrooms: number
  bathrooms: number
  parking: number
  area: number
  featured: boolean
  description: string
  amenities: string[]
  images: string[]
  ref?: string
  badge?: PropertyBadge
}

export const properties: Property[] = [
  {
    slug: 'casa-contemporanea-eldorado',
    title: 'Casa Contemporânea no Eldorado',
    type: 'Casa',
    status: 'Venda',
    price: 1250000,
    neighborhood: 'Eldorado',
    city: 'Contagem',
    bedrooms: 4,
    bathrooms: 3,
    parking: 4,
    area: 320,
    featured: true,
    description:
      'Casa de alto padrão com arquitetura contemporânea, ampla área de lazer com piscina e acabamento premium. Ambientes integrados e muita luz natural, perfeita para famílias que buscam conforto e sofisticação.',
    amenities: [
      'Piscina',
      'Área gourmet',
      'Jardim',
      'Suíte master',
      'Energia solar',
      'Portão eletrônico',
    ],
    ref: '2045',
    badge: 'Exclusivo',
    images: [
      '/images/property-2.png',
      '/images/property-1.png',
      '/images/property-3.png',
      '/images/property-4.png',
    ],
  },
  {
    slug: 'apartamento-luxo-cabral',
    title: 'Apartamento de Luxo no Cabral',
    type: 'Apartamento',
    status: 'Venda',
    price: 890000,
    neighborhood: 'Cabral',
    city: 'Contagem',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 124,
    featured: true,
    description:
      'Apartamento amplo e iluminado com varanda gourmet e vista privilegiada. Living integrado, cozinha planejada e localização privilegiada próxima a comércios, escolas e áreas verdes.',
    amenities: [
      'Varanda gourmet',
      'Academia',
      'Piscina',
      'Salão de festas',
      'Portaria 24h',
      'Playground',
    ],
    images: [
      '/images/property-1.png',
      '/images/property-3.png',
      '/images/property-5.png',
      '/images/property-6.png',
    ],
    ref: '2051',
    badge: 'Novo',
  },
  {
    slug: 'cobertura-buritis-bh',
    title: 'Cobertura Duplex no Buritis',
    type: 'Cobertura',
    status: 'Venda',
    price: 1680000,
    neighborhood: 'Buritis',
    city: 'Belo Horizonte',
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: 240,
    featured: true,
    description:
      'Cobertura duplex com terraço privativo, piscina e vista panorâmica de Belo Horizonte. Espaços generosos, acabamento de altíssimo padrão e total privacidade para receber bem.',
    amenities: [
      'Terraço privativo',
      'Piscina',
      'Churrasqueira',
      'Closet',
      'Lavabo',
      'Vista panorâmica',
    ],
    images: [
      '/images/property-4.png',
      '/images/property-1.png',
      '/images/property-3.png',
      '/images/property-5.png',
    ],
    ref: '2078',
    badge: 'Exclusivo',
  },
  {
    slug: 'casa-jardim-riacho-contagem',
    title: 'Casa Aconchegante no Jardim Riacho',
    type: 'Casa',
    status: 'Venda',
    price: 720000,
    neighborhood: 'Jardim Riacho',
    city: 'Contagem',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 180,
    featured: false,
    description:
      'Casa charmosa em rua tranquila, ideal para o primeiro lar da família. Quintal arborizado, cozinha ampla e suíte com closet. Ótima localização e excelente custo-benefício.',
    amenities: [
      'Quintal',
      'Suíte',
      'Cozinha ampla',
      'Área de serviço',
      'Garagem coberta',
    ],
    images: [
      '/images/property-2.png',
      '/images/property-5.png',
      '/images/property-3.png',
    ],
    ref: '2103',
    badge: 'Oportunidade',
  },
  {
    slug: 'apartamento-savassi-bh',
    title: 'Apartamento na Savassi',
    type: 'Apartamento',
    status: 'Venda',
    price: 1050000,
    neighborhood: 'Savassi',
    city: 'Belo Horizonte',
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 140,
    featured: true,
    description:
      'No coração da Savassi, apartamento elegante com living amplo, suítes espaçosas e localização imbatível. A poucos passos dos melhores restaurantes, bares e serviços da cidade.',
    amenities: [
      'Sacada',
      'Suítes',
      'Cozinha planejada',
      'Portaria 24h',
      'Bicicletário',
    ],
    images: [
      '/images/property-1.png',
      '/images/property-6.png',
      '/images/property-3.png',
      '/images/property-5.png',
    ],
    ref: '2112',
    badge: 'Novo',
  },
  {
    slug: 'casa-alto-padrao-vila-paris',
    title: 'Casa de Alto Padrão na Vila Paris',
    type: 'Casa',
    status: 'Venda',
    price: 2150000,
    neighborhood: 'Vila Paris',
    city: 'Belo Horizonte',
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    area: 410,
    featured: false,
    description:
      'Residência sofisticada em condomínio fechado, com amplo jardim, piscina aquecida e espaço gourmet completo. Acabamentos importados e projeto de iluminação assinado.',
    amenities: [
      'Piscina aquecida',
      'Espaço gourmet',
      'Home theater',
      'Jardim',
      'Condomínio fechado',
      'Adega',
    ],
    images: [
      '/images/property-4.png',
      '/images/property-2.png',
      '/images/property-1.png',
      '/images/property-3.png',
    ],
    ref: '2130',
  },
]

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

export function formatPrice(value: number) {
  return currency.format(value)
}

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug)
}

export function getFeatured() {
  return properties.filter((p) => p.featured)
}

export function getSimilar(slug: string, limit = 3) {
  const current = getProperty(slug)
  if (!current) return properties.slice(0, limit)
  return properties
    .filter((p) => p.slug !== slug && p.city === current.city)
    .concat(properties.filter((p) => p.slug !== slug && p.city !== current.city))
    .slice(0, limit)
}

export const propertyTypes = ['Casa', 'Apartamento', 'Cobertura', 'Terreno']
export const neighborhoods = Array.from(
  new Set(properties.map((p) => p.neighborhood)),
).sort()
export const cities = Array.from(new Set(properties.map((p) => p.city))).sort()
