import { PropertyCard } from '@/components/property-card'
import type { Property } from '@/lib/properties'

export function PropertiesGrid({ properties }: { properties: Property[] }) {
  return (
    <div className="mt-8 grid gap-6 transition-opacity duration-200 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  )
}
