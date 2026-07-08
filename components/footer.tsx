import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { WhatsappIcon, InstagramIcon } from '@/components/icons'
import { navLinks, siteConfig, whatsappLink } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 text-center md:grid-cols-2 md:text-left md:px-6 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start lg:col-span-1">
          <Image
            src="/images/logohelenamere.png"
            alt="Helena Mêre Corretora"
            width={180}
            height={54}
            className="h-20 w-auto md:h-24"
          />

        </div>

        <div className="flex flex-col items-center md:items-start">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <ul className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4 shrink-0 text-primary" />
                @{siteConfig.instagram}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                <span className="break-words">{siteConfig.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <a
            href={whatsappLink(`Olá ${siteConfig.name}!`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <WhatsappIcon className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} Helena Mêre Corretora. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
