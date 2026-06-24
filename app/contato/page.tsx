import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { WhatsappIcon, InstagramIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Helena Mêre por WhatsApp, telefone, e-mail ou Instagram. Atendimento em Contagem, Cabral e Belo Horizonte.',
}

export default function ContatoPage() {
  const channels = [
    {
      icon: WhatsappIcon,
      label: 'WhatsApp',
      value: siteConfig.whatsappDisplay,
      href: whatsappLink(`Olá ${siteConfig.name}!`),
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: siteConfig.whatsappDisplay,
      href: `tel:+${siteConfig.whatsappNumber}`,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: `@${siteConfig.instagram}`,
      href: siteConfig.instagramUrl,
    },
  ]

  return (
    <>
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Contato
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-semibold md:text-5xl">
            Vamos conversar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Estou pronta para te atender e tirar todas as suas dúvidas. Escolha o
            canal que preferir ou envie uma mensagem pelo formulário.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/40 text-primary">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="font-medium text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-primary p-6 text-primary-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-serif text-lg">Atendimento</p>
                <p className="mt-1 text-sm text-primary-foreground/85">
                  {siteConfig.address}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/85">
                  Regiões: {siteConfig.regions.join(', ')}
                </p>
              </div>
            </div>

            <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa de atendimento"
                src="https://www.google.com/maps?q=Contagem,+MG&output=embed"
                className="size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Envie uma mensagem
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Preencha os campos abaixo e continue a conversa no WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
