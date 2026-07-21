import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { WhatsappIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site'

export function CtaSection({
  title = 'Vamos encontrar o seu próximo lar?',
  description = 'Conte comigo para um atendimento próximo e cuidadoso em cada etapa. Fale comigo agora pelo WhatsApp e dê o primeiro passo.',
  message = `Olá ${siteConfig.name}, gostaria de conversar sobre imóveis.`,
}: {
  title?: string
  description?: string
  message?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28">
        <Reveal>
          <h2 className="text-balance font-serif text-3xl font-semibold md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full bg-background text-foreground hover:bg-background/90"
          >
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsappIcon className="size-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
