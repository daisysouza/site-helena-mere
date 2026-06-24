'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, SearchX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PropertyCard } from '@/components/property-card'
import {
  cities,
  neighborhoods,
  properties,
  propertyTypes,
} from '@/lib/properties'

const priceRanges = [
  { label: 'Até R$ 700 mil', value: '0-700000' },
  { label: 'R$ 700 mil a R$ 1 mi', value: '700000-1000000' },
  { label: 'R$ 1 mi a R$ 1,5 mi', value: '1000000-1500000' },
  { label: 'Acima de R$ 1,5 mi', value: '1500000-99999999' },
]

const ALL = 'all'

export function PropertiesBrowser() {
  const params = useSearchParams()

  const [type, setType] = useState(params.get('type') ?? ALL)
  const [city, setCity] = useState(params.get('city') ?? ALL)
  const [neighborhood, setNeighborhood] = useState(ALL)
  const [price, setPrice] = useState(params.get('price') ?? ALL)
  const [bedrooms, setBedrooms] = useState(params.get('bedrooms') ?? ALL)
  const [sort, setSort] = useState('relevance')

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (type !== ALL && p.type !== type) return false
      if (city !== ALL && p.city !== city) return false
      if (neighborhood !== ALL && p.neighborhood !== neighborhood) return false
      if (bedrooms !== ALL && p.bedrooms < Number(bedrooms)) return false
      if (price !== ALL) {
        const [min, max] = price.split('-').map(Number)
        if (p.price < min || p.price > max) return false
      }
      return true
    })

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc')
      list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'area-desc') list = [...list].sort((a, b) => b.area - a.area)

    return list
  }, [type, city, neighborhood, price, bedrooms, sort])

  function clearFilters() {
    setType(ALL)
    setCity(ALL)
    setNeighborhood(ALL)
    setPrice(ALL)
    setBedrooms(ALL)
    setSort('relevance')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-foreground">
              <SlidersHorizontal className="size-5 text-primary" />
              <h2 className="font-serif text-lg">Filtros</h2>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              <Filter label="Tipo de imóvel" value={type} onChange={setType}>
                {propertyTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </Filter>

              <Filter label="Cidade" value={city} onChange={setCity}>
                {cities.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </Filter>

              <Filter
                label="Bairro"
                value={neighborhood}
                onChange={setNeighborhood}
              >
                {neighborhoods.map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </Filter>

              <Filter label="Faixa de preço" value={price} onChange={setPrice}>
                {priceRanges.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </Filter>

              <Filter label="Quartos" value={bedrooms} onChange={setBedrooms}>
                {['1', '2', '3', '4'].map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}+ quartos
                  </SelectItem>
                ))}
              </Filter>

              <Button
                variant="outline"
                onClick={clearFilters}
                className="rounded-xl"
              >
                Limpar filtros
              </Button>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{' '}
              {filtered.length === 1
                ? 'imóvel encontrado'
                : 'imóveis encontrados'}
            </p>
            <div className="flex items-center gap-2">
              <Label className="whitespace-nowrap text-sm text-muted-foreground">
                Ordenar por
              </Label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="area-desc">Maior área</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20 text-center">
              <SearchX className="size-12 text-muted-foreground" />
              <h3 className="mt-4 font-serif text-xl">
                Nenhum imóvel encontrado
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Tente ajustar os filtros para ver mais opções disponíveis.
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="mt-6 rounded-xl"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Filter({
  label,
  value,
  onChange,
  children,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs font-medium text-muted-foreground">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="rounded-xl">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          {children}
        </SelectContent>
      </Select>
    </div>
  )
}
