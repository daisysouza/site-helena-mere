import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const highlights = [
  'Atendimento próximo e personalizado',
  'Profundo conhecimento da região',
  'Negociação transparente e segura',
]

export function AboutPreview() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28 lg:gap-16">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/helena-portrait.png"
              alt="Helena Mêre, corretora de imóveis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Sobre a Helena
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
            Uma corretora que entende de pessoas e de lares
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Acredito que cada imóvel carrega uma história e que encontrar o lar
            certo é uma decisão que vai muito além de metros quadrados. Por isso,
            ofereço um atendimento personalizado, atento aos detalhes e às suas
            necessidades, do primeiro contato até a entrega das chaves.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <Button asChild className="mt-8 rounded-full">
            <Link href="/sobre">
              Conheça minha história
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
