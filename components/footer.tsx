import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { WhatsappIcon, InstagramIcon } from '@/components/icons'
import { navLinks, siteConfig, whatsappLink } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="font-serif text-2xl font-semibold">
            Helena Mêre
          </span>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Corretora de Imóveis
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Atendimento boutique e personalizado para encontrar o lugar certo
            para você viver em Contagem, Cabral e Belo Horizonte.
          </p>
          <p className="mt-4 text-xs text-background/50">{siteConfig.creci}</p>
        </div>

        <div>
          <h3 className="font-serif text-lg">Navegação</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-background/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Phone className="size-4 shrink-0 text-accent" />
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Mail className="size-4 shrink-0 text-accent" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg">Fale comigo</h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink(`Olá ${siteConfig.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <WhatsappIcon className="size-4" />
              WhatsApp
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-accent"
            >
              <InstagramIcon className="size-4 text-accent" />@
              {siteConfig.instagram}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-background/50 md:px-6">
          © {new Date().getFullYear()} Helena Mêre Corretora. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
