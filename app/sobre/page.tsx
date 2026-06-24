import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Heart, Home, Target, Users } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Sobre Helena Mêre',
  description:
    'Conheça a história da Helena Mêre, corretora de imóveis com atendimento boutique em Contagem, Cabral e Belo Horizonte.',
}

const values = [
  {
    icon: Heart,
    title: 'Cuidado',
    description:
      'Cada cliente é único. Trato cada negociação com a atenção e o carinho que ela merece.',
  },
  {
    icon: Target,
    title: 'Transparência',
    description:
      'Informações claras e honestas em todas as etapas, para você decidir com confiança.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description:
      'Curadoria criteriosa e dedicação total para entregar o melhor resultado possível.',
  },
]

const stats = [
  { icon: Home, value: '500+', label: 'Imóveis negociados' },
  { icon: Users, value: '450+', label: 'Famílias atendidas' },
  { icon: Award, value: '10+', label: 'Anos de experiência' },
]

export default function SobrePage() {
  return (
    <>
      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Sobre mim
            </span>
            <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Prazer, sou a Helena Mêre
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Há mais de uma década ajudo famílias e investidores a encontrarem
              o lugar certo para viver e crescer. Minha trajetória nasceu de uma
              certeza simples: comprar ou vender um imóvel é um dos momentos mais
              importantes da vida, e merece um acompanhamento humano, atento e de
              confiança.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Especializada nas regiões de Contagem, Cabral e Belo Horizonte,
              ofereço um atendimento boutique: poucos clientes por vez, muita
              dedicação e total transparência. Mais do que fechar negócios, meu
              propósito é abrir portas para novas histórias.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/helena-portrait.png"
                alt="Helena Mêre, corretora de imóveis"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm ring-1 ring-border"
            >
              <stat.icon className="size-7 text-primary" />
              <p className="mt-4 font-serif text-4xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Minha missão
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">
              Conectar pessoas aos imóveis que combinam com seus sonhos e seu
              momento de vida, com um atendimento que une conhecimento técnico,
              sensibilidade e total confiança.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Minha visão
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ser referência em atendimento boutique no mercado imobiliário de
              Minas Gerais, reconhecida pela proximidade com os clientes e pela
              qualidade das experiências que proporciono.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-serif text-3xl font-semibold">
            Meus valores
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent/40 text-primary">
                  <value.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Vamos conversar sobre o seu próximo lar?"
        description="Estou à disposição para entender o que você procura e te ajudar a dar o próximo passo com segurança."
      />
    </>
  )
}
