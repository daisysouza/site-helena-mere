import { HeartHandshake, MapPinned, ShieldCheck, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humano',
    description:
      'Escuto suas necessidades com atenção e acompanho cada etapa de perto, com cuidado e empatia.',
  },
  {
    icon: MapPinned,
    title: 'Especialista na região',
    description:
      'Conheço a fundo várias oportunidades em BH, Contagem e região para indicar o lugar ideal para você.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança jurídica',
    description:
      'Negociações transparentes e documentação revisada para você comprar ou vender com tranquilidade.',
  },
  {
    icon: Sparkles,
    title: 'Curadoria premium',
    description:
      'Seleciono imóveis com qualidade e bom gosto, valorizando conforto, estética e localização.',
  },
]

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Por que escolher
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
          Uma experiência completa, do sonho às chaves
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/40 text-primary">
              <benefit.icon className="size-6" />
            </div>
            <h3 className="mt-5 font-serif text-xl">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
