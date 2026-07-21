'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  MapPin,
  Share2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { formatPrice, getPropertySpecs, type Property, type PropertyBadge } from '@/lib/properties'

const badgeStyles: Record<PropertyBadge, string> = {
  Novo: 'bg-emerald-500 text-white',
  Exclusivo: 'bg-amber-500 text-white',
  Oportunidade: 'bg-blue-600 text-white',
}

function SpecItem({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: string | number
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Icon className="size-4 text-secondary" />
      <span className="text-sm font-semibold text-foreground">{value}</span>
      <span className="text-[11px] leading-tight text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function PropertyCard({
  property,
}: {
  property: Property
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const specs = getPropertySpecs(property)

  const handleFavorite = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite((prev) => !prev)
  }, [])

  const handleShare = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const url = `${window.location.origin}/imoveis/${property.slug}`
      if (navigator.share) {
        try {
          await navigator.share({
            title: property.title,
            text: `${property.title} - ${formatPrice(property.price)}`,
            url,
          })
        } catch {
          /* user cancelled */
        }
      } else {
        await navigator.clipboard.writeText(url)
      }
    },
    [property.slug, property.title, property.price],
  )

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg">
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={handleFavorite}
          className={cn(
            'inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-background',
            isFavorite && 'text-destructive',
          )}
          aria-label={
            isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
          }
        >
          <Heart
            className={cn('size-4', isFavorite && 'fill-current')}
          />
        </button>
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-background"
          aria-label="Compartilhar imóvel"
        >
          <Share2 className="size-4" />
        </button>
      </div>

      <Link
        href={`/imoveis/${property.slug}`}
        className="flex flex-col flex-1"
        aria-label={`${property.title} - ${formatPrice(property.price)}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0] || '/placeholder.svg'}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <Badge className="rounded-full bg-primary text-primary-foreground">
              {property.type}
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full bg-background/90 text-foreground"
            >
              {property.status}
            </Badge>
            {property.badge && (
              <Badge
                className={cn('rounded-full', badgeStyles[property.badge])}
              >
                {property.badge}
              </Badge>
            )}
          </div>

          {property.ref && (
            <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground backdrop-blur-sm">
              REF {property.ref}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xl font-bold text-primary">
            {formatPrice(property.price)}
          </p>
          <h3 className="mt-1 font-serif text-lg leading-snug text-card-foreground">
            {property.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-secondary" />
            {property.neighborhood}, {property.city}
          </p>

          <div className="mt-auto grid grid-cols-4 gap-2 border-t border-border pt-4">
            {specs.map((spec) => (
              <SpecItem
                key={spec.label}
                icon={spec.icon}
                value={spec.value}
                label={spec.label}
              />
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
