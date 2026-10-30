export const siteConfig = {
  name: 'Helena Mere',
  role: 'Corretora de Imóveis',
  creci: 'CRECI-MG 52631',
  // Domínio oficial e canônico do site
  url: 'https://www.imoveishelenamere.com.br',
  // Número no formato internacional, somente dígitos
  whatsappNumber: '5531988324257',
  whatsappDisplay: '(31) 98832-4257',
  email: 'contato@helenamere.com.br',
  instagram: 'helenamerecorretora',
  instagramUrl: 'https://instagram.com/helenamerecorretora',
  address: 'Av. João César de Oliveira, Eldorado, Contagem - MG',
  regions: ['Contagem', 'Cabral', 'Belo Horizonte'],
}

export const siteUrl = siteConfig.url

export function whatsappLink(message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}&text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/imoveis', label: 'Imóveis' },
  { href: '/bairro-cabral-contagem', label: 'Bairro Cabral' },
  { href: '/noticias', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/anuncie-seu-imovel', label: 'Anuncie seu Imóvel' },
  { href: '/contato', label: 'Contato' },
]
