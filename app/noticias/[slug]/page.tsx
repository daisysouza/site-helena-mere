import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import { articles } from '@/lib/articles'
import { Button } from '@/components/ui/button'

type Props = { params: Promise<{ slug: string }> }

const sources = [
  { matches: ['bairro-cabral', 'parque-sarandi', 'morar-perto'], label: 'Prefeitura de Contagem · Entrega e revitalização do Parque Linear Sarandi', href: 'https://portal.contagem.mg.gov.br/portal/noticias/0/3/83424/prefeitura-entrega-parque-sarandi-e-maior-pista-de-skate-no-sabado-213/' },
  { matches: ['valorizacao'], label: 'BHAZ · Os bairros mais caros para comprar imóvel em Contagem', href: 'https://bhaz.com.br/noticias/contagem/bairros-mais-caros-de-contagem/' },
]

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.description, keywords: [article.keyword] }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  if (!article) notFound()

  return (
    <>
      <article className="bg-[#f8f7f2]">
        <header className="bg-primary text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
            <Link href="/noticias" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft className="size-4" /> Todos os artigos</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-accent">{article.category}</p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-tight md:text-5xl">{article.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">{article.description}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/60"><Clock3 className="size-4" /> {article.minutes} min de leitura</p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <div className="rounded-2xl border border-[#e8e7df] bg-white p-6 md:p-10">
            <figure className="mb-10 overflow-hidden rounded-xl">
              <div className="relative aspect-[16/8] bg-[#e8e7df]"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 800px" className="object-cover" /></div>
              <figcaption className="mt-2 text-xs text-[#81877f]">{article.imageAlt}</figcaption>
            </figure>
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="font-serif text-2xl font-semibold text-[#26392d] md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[17px] leading-[1.85] text-[#59645d]">{paragraph}</p>)}
              </section>
            ))}
            {article.slug === 'apartamento-area-privativa-cabral-contagem' && (
              <section className="mt-10 border-t border-[#eeeee8] pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Casa com vida</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#26392d]">Um cantinho para ver a natureza de perto.</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-[#59645d]">Uma varanda ou área externa pode ganhar novos sentidos com plantas, flores e momentos de observação. Estas imagens de referência trazem o sabiá-laranjeira e o ipê-amarelo que aparecem na identidade visual da Helena Mêre; não são registros do bairro.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <figure className="overflow-hidden rounded-xl bg-[#f4f1e9]">
                    <div className="relative aspect-[4/3]"><Image src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Sabi%C3%A1-laranjeira_%2849961102327%29.jpg/1280px-Sabi%C3%A1-laranjeira_%2849961102327%29.jpg" alt="Sabiá-laranjeira pousado em uma árvore" fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover" /></div>
                    <figcaption className="p-3 text-[10px] leading-relaxed text-[#69736b]">Sabiá-laranjeira · Foto: Alexandre Marino · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Sabi%C3%A1-laranjeira_(49961102327).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a></figcaption>
                  </figure>
                  <figure className="overflow-hidden rounded-xl bg-[#f4f1e9]">
                    <div className="relative aspect-[4/3]"><Image src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Ip%C3%AA_%28Avar%C3%A9%29_REFON.jpg/500px-Ip%C3%AA_%28Avar%C3%A9%29_REFON.jpg" alt="Ipê-amarelo florido em Avaré, São Paulo" fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover" /></div>
                    <figcaption className="p-3 text-[10px] leading-relaxed text-[#69736b]">Ipê-amarelo em Avaré · Foto: José Reynaldo da Fonseca · <a className="underline" href="https://commons.wikimedia.org/wiki/File:Ip%C3%AA_(Avar%C3%A9)_REFON.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> · <a className="underline" href="https://creativecommons.org/licenses/by/2.5/" target="_blank" rel="noopener noreferrer">CC BY 2.5</a></figcaption>
                  </figure>
                </div>
              </section>
            )}
            {sources.filter(({ matches }) => matches.some((match) => article.slug.includes(match))).length > 0 && (
              <div className="mt-10 border-t border-[#eeeee8] pt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Fontes e informações</h2>
                <ul className="mt-3 space-y-2">
                  {sources.filter(({ matches }) => matches.some((match) => article.slug.includes(match))).map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4">{source.label}</a></li>)}
                </ul>
              </div>
            )}
          </div>
          <aside className="mt-8 rounded-2xl bg-[#e9eee3] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Encontre seu próximo endereço</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#26392d]">Quer conhecer os imóveis no Cabral?</h2>
            <p className="mt-3 leading-relaxed text-[#657067]">Veja as opções disponíveis e compare localização, planta e características de cada imóvel.</p>
            <Button asChild className="mt-6 rounded-full bg-primary hover:bg-[#006b32]"><Link href="/imoveis">Explorar imóveis <ArrowRight className="ml-2 size-4" /></Link></Button>
          </aside>
          <div className="mt-10 border-t border-[#e2e2d9] pt-7">
            <h2 className="font-serif text-xl font-semibold text-[#26392d]">Continue lendo</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {articles.filter((item) => item.slug !== article.slug).slice(0, 2).map((item) => <Link key={item.slug} href={`/noticias/${item.slug}`} className="rounded-xl border border-[#e8e7df] bg-white p-4 text-sm font-medium leading-relaxed text-primary hover:border-secondary">{item.title}<ArrowRight className="ml-2 inline size-4" /></Link>)}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
