'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cities, propertyTypes } from '@/lib/properties'

const bedroomOptions = ['1', '2', '3', '4']

export function SearchBar() {
  const router = useRouter()
  const [type, setType] = useState('')
  const [city, setCity] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  function handleSearch() {
    const params = new URLSearchParams()
    if (type) params.set('type', type)
    if (city) params.set('city', city)
    if (bedrooms) params.set('bedrooms', bedrooms)
    router.push(`/imoveis?${params.toString()}`)
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-xl md:p-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 text-center">
          <Label className="text-xs font-medium text-muted-foreground">
            Tipo de imóvel
          </Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <Label className="text-xs font-medium text-muted-foreground">
            Cidade
          </Label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <Label className="text-xs font-medium text-muted-foreground">
            Quartos
          </Label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger className="w-full rounded-xl">
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              {bedroomOptions.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}+ quartos
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSearch}
          size="lg"
          className="w-full rounded-xl text-base"
        >
          <Search className="size-5" />
          Buscar imóveis
        </Button>
      </div>
    </div>
  )
}
