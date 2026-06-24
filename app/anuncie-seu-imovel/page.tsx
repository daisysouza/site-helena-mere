import type { Metadata } from 'next'
import { BadgeCheck, Camera, Megaphone, Users } from 'lucide-react'
import { ListPropertyForm } from '@/components/list-property-form'

export const metadata: Metadata = {
  title: 'Anuncie seu imóvel',
  description:
    'Anuncie seu imóvel com a Helena Mêre e conte com divulgação qualificada e atendimento dedicado para vender mais rápido.',
}

const benefits = [
  {
    icon: Camera,
    title: 'Divulgação premium',
    description: 'Apresentação cuidadosa do seu imóvel para atrair os compradores certos.',
  },
  {
    icon: Users,
    title: 'Rede qualificada',
    description: 'Acesso a uma base de clientes ativa procurando imóveis na sua região.',
  },
  {
    icon: BadgeCheck,
    title: 'Negociação segura',
    description: 'Acompanhamento completo e suporte na documentação até a venda.',
  },
]

export default function AnunciePage() {
  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            <Megaphone className="size-4" />
            Anuncie com a Helena
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-semibold md:text-5xl">
            Venda seu imóvel com tranquilidade
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Preencha o formulário abaixo com os dados do seu imóvel. Vou analisar
            com carinho e entrar em contato para conversarmos sobre a melhor
            estratégia de venda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Por que anunciar comigo?
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Um atendimento boutique faz toda a diferença na hora de vender. Cada
              imóvel recebe atenção individual e uma estratégia pensada para o seu
              perfil.
            </p>
            <ul className="mt-8 flex flex-col gap-6">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/40 text-primary">
                    <b.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ListPropertyForm />
        </div>
      </section>
    </>
  )
}
