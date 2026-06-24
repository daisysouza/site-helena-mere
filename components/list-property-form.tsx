'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { WhatsappIcon } from '@/components/icons'
import { propertyTypes } from '@/lib/properties'
import { siteConfig, whatsappLink } from '@/lib/site'

export function ListPropertyForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [value, setValue] = useState('')
  const [notes, setNotes] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = [
      `Olá ${siteConfig.name}, gostaria de anunciar meu imóvel.`,
      '',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Tipo de imóvel: ${type || 'Não informado'}`,
      `Bairro: ${neighborhood}`,
      `Valor estimado: ${value || 'Não informado'}`,
      notes ? `Observações: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" htmlFor="name">
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="rounded-xl"
          />
        </Field>

        <Field label="Telefone / WhatsApp" htmlFor="phone">
          <Input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(31) 90000-0000"
            className="rounded-xl"
          />
        </Field>

        <Field label="Tipo de imóvel" htmlFor="type">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="type" className="rounded-xl">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Bairro" htmlFor="neighborhood">
          <Input
            id="neighborhood"
            required
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="Ex: Eldorado, Cabral..."
            className="rounded-xl"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Valor estimado" htmlFor="value">
            <Input
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ex: R$ 750.000"
              className="rounded-xl"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Observações (opcional)" htmlFor="notes">
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Conte um pouco sobre o imóvel: número de quartos, diferenciais, etc."
              rows={4}
              className="rounded-xl"
            />
          </Field>
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full rounded-xl text-base">
        <WhatsappIcon className="size-5" />
        Enviar pelo WhatsApp
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Ao enviar, você será direcionado para uma conversa no WhatsApp com os
        dados preenchidos.
      </p>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </Label>
      {children}
    </div>
  )
}
