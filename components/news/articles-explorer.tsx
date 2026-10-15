'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3, Search } from 'lucide-react'
import type { Article } from '@/lib/articles'

const filters = ['Todos', 'Vida no bairro', 'Lazer e natureza', 'Mercado imobiliário', 'Imóveis']

function matchesFilter(article: Article, filter: string) {
  if (filter === 'Todos') return true
  if (filter === 'Vida no bairro') return ['Bairros e qualidade de vida', 'Vida prática', 'Guia de regiões'].includes(article.category)
  if (filter === 'Imóveis') return article.category === 'Imóveis e estilo de morar'
  return article.category === filter
}

export function ArticlesExplorer({ articles }: { articles: Article[] }) {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [query, setQuery] = useState('')
  const visibleArticles = useMemo(() => articles.filter((article) => {
    const term = query.trim().toLocaleLowerCase('pt-BR')
    const matchesQuery = !term || `${article.title} ${article.description} ${article.category}`.toLocaleLowerCase('pt-BR').includes(term)
    return matchesFilter(article, activeFilter) && matchesQuery
  }), [activeFilter, articles, query])

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Explore o Cabral</p><h2 className="mt-2 font-serif text-3xl text-[#183a2b]">Para ler e descobrir</h2></div>
          <label className="flex h-10 w-full items-center gap-2 rounded-md border border-[#d8d3c9] bg-white px-3 text-[#758076] md:max-w-[260px]">
            <Search className="size-4 shrink-0" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar matéria..." className="min-w-0 flex-1 bg-transparent text-sm text-[#26392d] outline-none placeholder:text-[#8a908a]" />
          </label>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-b border-[#ddd7cd] pb-4" aria-label="Filtrar matérias por categoria">
          {filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-xs transition-colors ${activeFilter === filter ? 'bg-primary font-semibold text-white' : 'text-[#59665b] hover:bg-[#e9e7dc]'}`}>{filter}</button>)}
          <span className="ml-auto self-center text-[10px] text-[#8a908a]">{visibleArticles.length} matérias</span>
        </div>
        {visibleArticles.length ? <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <article key={article.slug} className="group overflow-hidden rounded-md border border-[#dbd7cf] bg-white transition-shadow hover:shadow-lg hover:shadow-[#243526]/10">
              <Link href={`/noticias/${article.slug}`} className="block">
                <div className="relative aspect-[1.48] overflow-hidden bg-[#e8e7df]"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><span className="absolute bottom-3 left-3 rounded-sm bg-primary/95 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">{article.category}</span></div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-[10px] text-[#8a908a]"><span className="uppercase tracking-[0.13em]">Cabral, Contagem</span><span className="inline-flex items-center gap-1"><Clock3 className="size-3" /> {article.minutes} min</span></div>
                  <h3 className="mt-3 line-clamp-3 font-serif text-xl leading-snug text-[#183a2b] group-hover:text-primary">{article.title}</h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-[#70776f]">{article.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Ler matéria <ArrowRight className="size-3" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div> : <p className="py-16 text-center text-sm text-[#70776f]">Nenhuma matéria encontrada. Tente outro termo ou categoria.</p>}
      </div>
    </section>
  )
}
