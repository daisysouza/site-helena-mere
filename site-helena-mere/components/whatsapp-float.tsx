import { WhatsappIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink(
        `Olá ${siteConfig.name}, vi seu site e gostaria de mais informações.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsappIcon className="size-7" />
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-20" />
    </a>
  )
}
