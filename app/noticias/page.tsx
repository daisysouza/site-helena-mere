import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { articles } from '@/lib/articles'
import { ArticlesExplorer } from '@/components/news/articles-explorer'

export const metadata: Metadata = {
  title: 'Notícias do Cabral | Guias e matérias do bairro',
  description: 'Leia sobre o bairro Cabral, em Contagem: qualidade de vida, Parque Sarandi, mercado imobiliário e opções de imóveis.',
}

export default function NoticiasPage() {
  const featured = articles[0]
  const market = articles[2]
  const comparison = articles[3]
  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-[#ded9d1] bg-[#fbf9f4]">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5 text-[10px] text-[#7b8179] md:px-6"><Link href="/" className="hover:text-primary">Início</Link><span>/</span><span className="text-primary">Notícias do Cabral</span></div>
      </nav>
      <header className="relative isolate flex min-h-[250px] items-center overflow-hidden bg-primary text-white md:min-h-[290px]">
        <Image src="/images/cabral/cabral-banner.jpg" alt="Vista aérea do bairro Cabral e do Shopping Contagem" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#064b2a]/90 via-[#064b2a]/70 to-[#064b2a]/20" />
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent"><MapPin className="size-3" /> Cabral · Contagem, MG</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Notícias do Cabral</h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85">Um olhar sobre o bairro, histórias para o seu próximo lar.</p>
          <Link href="/imoveis" className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold text-white">Conheça os imóveis da região <ArrowRight className="size-3" /></Link>
        </div>
      </header>

      <section className="border-b border-[#dfdbd2] bg-[#fbf9f4] py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Feito pra você</p><h2 className="mt-1 font-serif text-2xl text-[#183a2b]">O bairro, por diferentes olhares</h2></div><span className="hidden text-[9px] text-[#8a908a] md:block">Informação para escolher melhor.</span></div>
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <Link href={`/noticias/${featured.slug}`} className="group relative min-h-[245px] overflow-hidden rounded-sm bg-[#26392d] text-white">
              <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1710]/90 via-[#0b1710]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6"><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent">Em destaque · {featured.category}</p><h3 className="mt-2 max-w-xl font-serif text-2xl leading-tight md:text-3xl">{featured.title}</h3><span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold">Ler matéria <ArrowRight className="size-3" /></span></div>
            </Link>
            <div className="flex flex-col justify-between border-l-2 border-primary py-1 pl-5">
              <div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">Olhar da cidade</p><Link href={`/noticias/${comparison.slug}`} className="mt-2 block font-serif text-2xl leading-tight text-[#183a2b] hover:text-primary">Conhecer o entorno também faz parte da escolha.</Link><p className="mt-3 text-xs leading-relaxed text-[#70776f]">O Cabral, em Contagem, faz parte da região Ressaca. Aqui reunimos informações sobre o bairro e orientações para quem pensa em morar na região.</p></div>
              <div className="mt-5 border-t border-[#ded9d1] pt-4"><p className="text-[9px] font-bold uppercase tracking-[0.17em] text-primary">Mercado imobiliário</p><Link href={`/noticias/${market.slug}`} className="mt-1 block font-serif text-lg leading-snug text-[#183a2b] hover:text-primary">{market.title}</Link><span className="mt-2 inline-flex items-center gap-1 text-[10px] text-[#7b8179]"><Clock3 className="size-3" /> {market.minutes} min de leitura</span></div>
            </div>
          </div>
        </div>
      </section>

      <ArticlesExplorer articles={articles} />
    </>
  )
}
