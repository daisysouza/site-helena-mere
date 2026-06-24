export const siteConfig = {
  name: 'Helena Mêre',
  role: 'Corretora de Imóveis',
  creci: 'CRECI-MG 00000',
  // Número no formato internacional, somente dígitos
  whatsappNumber: '5531999999999',
  whatsappDisplay: '(31) 99999-9999',
  email: 'contato@helenamere.com.br',
  instagram: 'helenamere.corretora',
  instagramUrl: 'https://instagram.com/helenamere.corretora',
  address: 'Av. João César de Oliveira, Eldorado, Contagem - MG',
  regions: ['Contagem', 'Cabral', 'Belo Horizonte'],
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/imoveis', label: 'Imóveis' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/anuncie-seu-imovel', label: 'Anuncie seu Imóvel' },
  { href: '/contato', label: 'Contato' },
]
