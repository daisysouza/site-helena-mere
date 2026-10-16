import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown, ArrowRight, Bike, Building2, Heart, MapPin,
  ShoppingBag, Trees, TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsappIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Bairro Cabral: conheça, more e invista em Contagem',
  description:
    'Um guia completo do bairro Cabral, em Contagem: vantagens de morar, referências da região e motivos para comprar um imóvel.',
}

const reasons = [
  { icon: Bike, title: 'Mais espaço para viver', text: 'Parques, áreas abertas e opções de lazer por perto ajudam a equilibrar a rotina entre casa, trabalho e tempo livre.' },
  { icon: Building2, title: 'Comércio e serviços próximos', text: 'Shopping, serviços e referências importantes da cidade deixam as tarefas do cotidiano mais simples.' },
  { icon: MapPin, title: 'Boa conexão com a região', text: 'A Avenida Severino Ballesteros é um dos principais eixos para circular pelo Cabral e pelo entorno.' },
]

export default function BairroCabralPage() {
  const [featuredArticle, ...moreArticles] = articles

  return (
    <>
      <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-primary text-white md:min-h-[610px]">
        <Image
          src="/images/cabral/casa-sabia.jpg"
          alt="Casa contemporânea com jardim, ipê-amarelo e sabiá-laranjeira"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#064b2a]/95 via-[#064b2a]/75 to-[#064b2a]/20" />
        <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <MapPin className="size-3.5" /> Guia do bairro
            </p>
            <h1 className="mt-7 font-serif text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Cabral: um bairro para chamar de <span className="text-accent">seu.</span>
            </h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-accent px-6 text-[#163b24] hover:bg-white">
                <a href="#conheca">Conheça o bairro <ArrowDown className="ml-2 size-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/50 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href="/imoveis">Ver imóveis <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-sm font-medium text-white/90">
              <span className="inline-flex items-center gap-2"><Trees className="size-4 text-accent" /> Natureza</span>
              <span className="inline-flex items-center gap-2"><ShoppingBag className="size-4 text-accent" /> Conveniência</span>
              <span className="inline-flex items-center gap-2"><Heart className="size-4 text-accent" /> Vida no bairro</span>
            </div>
          </div>
        </div>
      </section>

      <section id="conheca" className="scroll-mt-20 bg-[#f8f7f2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Conheça o Cabral</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#26392d] md:text-5xl">Natureza, praticidade e qualidade de vida</h2>
            </div>
            <div className="max-w-3xl text-lg leading-relaxed text-[#657067]">
              <p>O bairro Cabral, em Contagem (MG), combina a tranquilidade das áreas verdes com a praticidade de uma região em constante desenvolvimento. Com acesso pela Avenida Severino Ballesteros, o bairro oferece uma localização estratégica, próxima a importantes pontos de comércio, lazer e educação, como o Shopping Contagem, o Parque Linear Sarandi e o campus do CEFET-MG. A presença da Reserva Ambiental do Cabral traz maior contato com a natureza e valoriza a paisagem.</p>
              <p className="mt-5">Com diferentes opções de moradia e uma infraestrutura que acompanha o crescimento da região, o Cabral se destaca entre os bairros de Contagem para quem deseja morar bem, com áreas verdes e boas perspectivas de valorização imobiliária.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-end">
            <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Ver todos os artigos <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Link href={`/noticias/${featuredArticle.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-[#f8f7f2] transition-shadow hover:shadow-lg sm:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-56 sm:min-h-full"><Image src={featuredArticle.image} alt={featuredArticle.imageAlt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="flex flex-col justify-center p-6 md:p-8"><span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Bairros e qualidade de vida</span><h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#26392d] group-hover:text-primary md:text-3xl">{featuredArticle.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#707971]">{featuredArticle.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ler artigo <ArrowRight className="size-4" /></span></div>
            </Link>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {moreArticles.slice(0, 2).map((article) => (
                <Link key={article.slug} href={`/noticias/${article.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-[#f8f7f2] sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-36"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                  <div className="flex flex-col justify-center p-5"><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{article.category}</span><h3 className="mt-2 line-clamp-3 font-serif text-lg font-semibold leading-snug text-[#26392d] group-hover:text-primary">{article.title}</h3><span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary">Ler artigo <ArrowRight className="size-3" /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eee3] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vantagens de morar</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#26392d] md:text-5xl">Mais do que um endereço, uma rotina que faz sentido.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#657067]">Morar bem também é ter escolhas por perto: um passeio ao ar livre, serviços para resolver o dia e caminhos que conectam você ao restante da cidade.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-2xl bg-white p-7 md:p-8">
                <p className="font-serif text-5xl text-secondary">0{index + 1}</p>
                <div className="mt-6 flex size-12 items-center justify-center rounded-full bg-accent/30 text-primary"><Icon className="size-5" /></div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#26392d]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#707971]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#064b2a] py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Por que comprar no Cabral?</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Um lugar para construir seus próximos capítulos.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">Comprar um imóvel é escolher o cenário da sua vida. No Cabral, a combinação de infraestrutura, lazer e conexão com a cidade torna a região uma alternativa interessante para quem busca morar ou diversificar seu patrimônio.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 sm:col-span-2">
              <TrendingUp className="size-6 text-accent" />
              <h3 className="mt-4 font-serif text-2xl">Potencial para o seu próximo passo</h3>
              <p className="mt-2 leading-relaxed text-white/75">Uma região com equipamentos urbanos e melhorias em espaços públicos pode fazer sentido para diferentes projetos de vida. Conheça cada imóvel de perto e compare as opções disponíveis.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6">
              <Trees className="size-6 text-accent" /><h3 className="mt-4 font-serif text-xl">Qualidade de vida</h3><p className="mt-2 text-sm leading-relaxed text-white/75">Lazer e áreas verdes compõem uma rotina mais equilibrada.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6">
              <MapPin className="size-6 text-accent" /><h3 className="mt-4 font-serif text-xl">Escolha bem</h3><p className="mt-2 text-sm leading-relaxed text-white/75">Entender o entorno ajuda a encontrar um imóvel alinhado às suas prioridades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f2] py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Seu próximo endereço pode estar aqui</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#26392d] md:text-4xl">Vamos encontrar o melhor imóvel para você?</h2><p className="mt-3 text-[#657067]">Converse com {siteConfig.name} e conheça as oportunidades na região.</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary px-6 hover:bg-[#006b32]"><Link href="/imoveis">Ver imóveis <ArrowRight className="ml-2 size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary px-6 text-primary hover:bg-accent/25"><a href={whatsappLink('Olá! Quero saber mais sobre imóveis no bairro Cabral, em Contagem.')} target="_blank" rel="noopener noreferrer"><WhatsappIcon className="mr-2 size-4" /> Falar com a Helena</a></Button>
          </div>
        </div>
      </section>
    </>
  )
}
