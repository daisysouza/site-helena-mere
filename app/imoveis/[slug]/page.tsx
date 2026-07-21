import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Check,
  ChevronLeft,
  MapPin,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PropertyGallery } from '@/components/property-gallery'
import { PropertyCard } from '@/components/property-card'
import { PropertyActions } from '@/components/property-actions'
import { WhatsappIcon } from '@/components/icons'
import {
  formatPrice,
  getProperty,
  getPropertySpecs,
  getSimilar,
  properties,
} from '@/lib/properties'
import { siteConfig, whatsappLink } from '@/lib/site'

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) return { title: 'Imóvel não encontrado' }
  return {
    title: property.title,
    description: property.description,
  }
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) notFound()

  const similar = getSimilar(slug)
  const specs = getPropertySpecs(property)

  const whatsappMessage = `Olá ${siteConfig.name}, tenho interesse no imóvel "${property.title}" (${formatPrice(property.price)}). Pode me passar mais informações?`

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <Link
          href="/imoveis"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronLeft className="size-4" />
          Voltar para imóveis
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <PropertyGallery images={property.images} title={property.title} />

            <div className="mt-10">
              <h2 className="font-serif text-2xl font-semibold">Descrição</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {property.description}
              </p>
            </div>

            <Separator className="my-10" />

            <div>
              <h2 className="font-serif text-2xl font-semibold">
                Comodidades
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent/40 text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="text-foreground">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-10" />

            <div>
              <h2 className="font-serif text-2xl font-semibold">Localização</h2>
              <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-4 text-secondary" />
                {property.neighborhood}, {property.city} - MG
              </p>
              <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <iframe
                  title={`Mapa de ${property.neighborhood}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${property.neighborhood}, ${property.city}, MG`,
                  )}&output=embed`}
                  className="size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-primary text-primary-foreground">
                    {property.type}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-muted text-foreground"
                  >
                    À {property.status.toLowerCase()}
                  </Badge>
                </div>
                <PropertyActions
                  slug={property.slug}
                  title={property.title}
                  price={property.price}
                />
              </div>

              <h1 className="mt-4 text-balance font-serif text-2xl font-semibold leading-snug">
                {property.title}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4 text-secondary" />
                {property.neighborhood}, {property.city}
              </p>

              <p className="mt-5 text-3xl font-semibold text-primary">
                {formatPrice(property.price)}
              </p>

              {property.ref && (
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  REF {property.ref}
                </p>
              )}

              <div className="mt-6 grid grid-cols-2 gap-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl bg-muted/60 p-4 text-center"
                  >
                    <spec.icon className="mx-auto size-5 text-primary" />
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      {spec.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {spec.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-6 w-full rounded-xl text-base"
              >
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsappIcon className="size-5" />
                  Tenho interesse
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Resposta rápida pelo WhatsApp com a Helena
              </p>
            </div>
          </aside>
        </div>

        {similar.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Imóveis semelhantes
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
