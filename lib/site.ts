export const siteConfig = {
  name: 'Helena Mêre',
  role: 'Corretora de Imóveis',
  creci: 'CRECI-MG 00000',
  // Número no formato internacional, somente dígitos
  whatsappNumber: '5531988324257',
  whatsappDisplay: '(31) 98832-4257',
  email: 'contato@helenamere.com.br',
  instagram: 'helenamerecorretora',
  instagramUrl: 'https://instagram.com/helenamerecorretora',
  address: 'Av. João César de Oliveira, Eldorado, Contagem - MG',
  regions: ['Contagem', 'Cabral', 'Belo Horizonte'],
}

export function whatsappLink(message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}&text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/imoveis', label: 'Imóveis' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/anuncie-seu-imovel', label: 'Anuncie seu Imóvel' },
  { href: '/contato', label: 'Contato' },
]
