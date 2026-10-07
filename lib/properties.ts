import type { ComponentType } from 'react'
import { Bath, BedDouble, Car, Maximize } from 'lucide-react'

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
    slug: 'apartamento-sabias-cabral',
    title: 'Privativa com vista definitiva na Alameda dos Sabiás',
    type: 'Apartamento',
    status: 'Venda',
    price: 829000,
    neighborhood: 'Cabral',
    city: 'Contagem',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 135,
    featured: true,
    description:
      'Vista definitiva, com elevador, apenas 2 apartamentos por andar. Possui aproximadamente 94 m² de área interna e 46 m² de área externa, para maior conforto. O prédio conta com elevador e são apenas 2 apartamentos por andar, proporcionando mais privacidade e tranquilidade.',
    amenities: [
      'Elevador',
      'Apenas 2 apartamentos por andar',
      '94 m² de área interna',
      '46 m² de área externa',
      'Vista definitiva',
      'Privacidade',
    ],
    ref: '2045',
    badge: 'Exclusivo',
    images: [
      '/images/sabias/01-area-externa-vista.jpg',
      '/images/sabias/02-sala.jpg',
      '/images/sabias/03-sala-cozinha.jpg',
      '/images/sabias/04-cozinha.jpg',
      '/images/sabias/05-cozinha-bancada.jpg',
      '/images/sabias/06-quarto1.jpg',
      '/images/sabias/07-quarto2.jpg',
      '/images/sabias/08-quarto3.jpg',
      '/images/sabias/09-banheiro-interno.jpg',
      '/images/sabias/10-banheiro-social.jpg',
      '/images/sabias/11-banheiro-externo.jpg',
      '/images/sabias/12-corredor.jpg',
      '/images/sabias/13-area-externa.jpg',
      '/images/sabias/14-vista-varanda.jpg',
      '/images/sabias/15-varanda.jpg',
      '/images/sabias/16-porta-varanda.jpg',
      '/images/sabias/17-porta-entrada.jpg',
      '/images/sabias/18-porta-entrada-2.jpg',
    ],
  },
  {
    slug: 'apartamento-patativas-cabral',
    title: 'Privativa espaçosa com garagem no Cabral',
    type: 'Apartamento',
    status: 'Venda',
    price: 360000,
    neighborhood: 'Cabral',
    city: 'Contagem',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: 64.84,
    featured: true,
    description:
      'Conforto e praticidade com área privativa. Um apartamento para quem valoriza praticidade e conforto, com mais espaço para aproveitar o dia a dia. Com 64,84 m², o imóvel conta com garagem e área privativa, oferecendo uma experiência mais agradável e versátil para morar. Excelente oportunidade!',
    amenities: ['Área privativa', 'Garagem'],
    ref: '2103',
    badge: 'Oportunidade',
    images: [
      '/images/patativas/01-sala.jpg',
      '/images/patativas/02-sala-2.jpg',
      '/images/patativas/03-sala-entrada.jpg',
      '/images/patativas/04-sala-janela.jpg',
      '/images/patativas/05-porta-sala.jpg',
      '/images/patativas/06-cozinha-bancada.jpg',
      '/images/patativas/07-cozinha-armarios.jpg',
      '/images/patativas/08-cozinha-pia.jpg',
      '/images/patativas/09-quarto1.jpg',
      '/images/patativas/10-quarto-cama.jpg',
      '/images/patativas/11-quarto-porta.jpg',
      '/images/patativas/12-banheiro.jpg',
      '/images/patativas/13-garagem.jpg',
      '/images/patativas/14-area-lavanderia.jpg',
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

export type PropertySpec = {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string | number
}

export function getPropertySpecs(property: Property): PropertySpec[] {
  return [
    { icon: BedDouble, label: 'Quartos', value: property.bedrooms },
    { icon: Bath, label: 'Banheiros', value: property.bathrooms },
    { icon: Car, label: 'Vagas', value: property.parking },
    { icon: Maximize, label: 'Área', value: `${property.area.toLocaleString('pt-BR')} m²` },
  ]
}
