'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariana Andrade',
    location: 'Contagem',
    text: 'A Helena foi incrível do início ao fim. Entendeu exatamente o que a nossa família precisava e encontrou a casa dos nossos sonhos no Eldorado. Atendimento humano e atencioso.',
  },
  {
    name: 'Rodrigo Teixeira',
    location: 'Belo Horizonte',
    text: 'Profissional dedicada e transparente. Vendi meu apartamento na Savassi em tempo recorde e com total segurança. Recomendo de olhos fechados.',
  },
  {
    name: 'Patrícia e Carlos',
    location: 'Cabral',
    text: 'Compramos nosso primeiro imóvel com a Helena e nos sentimos seguros em cada etapa. Ela cuidou de tudo com muito carinho e profissionalismo.',
  },
  {
    name: 'Fernanda Lima',
    location: 'Buritis',
    text: 'Conhecimento absurdo da região e uma curadoria de imóveis impecável. Encontrei exatamente o que procurava sem perder tempo.',
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Depoimentos
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
              Histórias de quem encontrou seu lar
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Anterior"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximo"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] pr-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <figure className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border">
                  <Quote className="size-8 text-accent" />
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.location}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para depoimento ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === i
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
