import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsappIcon } from '@/components/icons'
import { SearchBar } from '@/components/search-bar'
import { siteConfig, whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[90vh] w-full flex-col md:min-h-screen">
        <Image
          src="/images/hero-home.png"
          alt="Casa de alto padrão ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-4 pt-20 md:px-6">
          <span className="mb-5 inline-flex w-fit items-center rounded-full bg-background/15 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm ring-1 ring-background/30">
            Imóveis em Contagem, Cabral e Belo Horizonte
          </span>
          <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-background md:text-5xl lg:text-6xl">
            O lugar certo para viver começa com a escolha certa.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            Atendimento boutique e cuidadoso para encontrar o imóvel que combina
            com a sua história. Vamos juntos nessa jornada?
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full text-base">
              <Link href="/imoveis">
                Ver imóveis
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full bg-background text-base text-foreground hover:bg-background/90"
            >
              <a
                href={whatsappLink(
                  `Olá ${siteConfig.name}, gostaria de mais informações.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="size-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-6 md:px-6">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
