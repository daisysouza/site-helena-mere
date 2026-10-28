import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PropertiesBrowser } from '@/components/properties-browser'
import { PropertiesGrid } from '@/components/properties-grid'
import { properties } from '@/lib/properties'

const title = 'Imóveis à venda no Cabral e em Contagem'
const description =
  'Explore nossa seleção de casas, apartamentos e coberturas à venda em Contagem, especialmente no bairro Cabral, e em Belo Horizonte.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/imoveis',
  },
  openGraph: {
    title,
    description,
    url: '/imoveis',
    type: 'website',
  },
}

export default function ImoveisPage() {
  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Nossos imóveis
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-semibold md:text-5xl">
            Encontre o lugar certo para viver
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Use os filtros para descobrir o imóvel ideal entre nossa curadoria
            em Contagem, Cabral e Belo Horizonte.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
            <PropertiesGrid properties={properties} />
          </div>
        }
      >
        <PropertiesBrowser />
      </Suspense>
    </>
  )
}
