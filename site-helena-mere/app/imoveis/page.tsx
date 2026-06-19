import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PropertiesBrowser } from '@/components/properties-browser'

export const metadata: Metadata = {
  title: 'Imóveis à venda',
  description:
    'Explore nossa seleção de casas, apartamentos e coberturas em Contagem, Cabral e Belo Horizonte.',
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

      <Suspense fallback={null}>
        <PropertiesBrowser />
      </Suspense>
    </>
  )
}
