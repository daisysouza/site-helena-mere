import Link from 'next/link'
import Image from 'next/image'
import { Bath, BedDouble, Car, MapPin, Maximize } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { formatPrice, type Property } from '@/lib/properties'

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0] || '/placeholder.svg'}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className="rounded-full bg-primary text-primary-foreground">
            {property.type}
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full bg-background/90 text-foreground"
          >
            {property.status}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-lg font-semibold text-primary">
          {formatPrice(property.price)}
        </p>
        <h3 className="mt-1 font-serif text-lg leading-snug text-card-foreground">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 text-secondary" />
          {property.neighborhood}, {property.city}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-secondary" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4 text-secondary" />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Car className="size-4 text-secondary" />
            {property.parking}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-secondary" />
            {property.area} m²
          </span>
        </div>
      </div>
    </Link>
  )
}
