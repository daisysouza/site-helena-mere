import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/property-card'
import { getFeatured } from '@/lib/properties'

export function FeaturedProperties() {
  const featured = getFeatured()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Seleção especial
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
            Imóveis em destaque
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Uma curadoria de imóveis escolhidos a dedo, pensando no conforto, na
            localização e na qualidade que a sua família merece.
          </p>
        </div>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/imoveis">
            Ver todos
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </section>
  )
}
