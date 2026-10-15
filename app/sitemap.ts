import type { MetadataRoute } from 'next'
import { properties } from '@/lib/properties'
import { articles } from '@/lib/articles'

const siteUrl = 'https://site-helena-mere.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    '',
    '/imoveis',
    '/bairro-cabral-contagem',
    '/sobre',
    '/contato',
    '/anuncie-seu-imovel',
  ].map((path) => ({ url: `${siteUrl}${path}` }))

  const propertyPages: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${siteUrl}/imoveis/${property.slug}`,
  }))

  const articlePages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/noticias` },
    ...articles.map((article) => ({ url: `${siteUrl}/noticias/${article.slug}` })),
  ]

  return [...pages, ...propertyPages, ...articlePages]
}
