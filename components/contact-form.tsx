'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { WhatsappIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site'

export function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = [
      `Olá ${siteConfig.name}!`,
      '',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Mensagem: ${message}`,
    ].join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-name" className="text-sm font-medium">
            Nome completo
          </Label>
          <Input
            id="c-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-phone" className="text-sm font-medium">
            Telefone / WhatsApp
          </Label>
          <Input
            id="c-phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(31) 90000-0000"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="c-message" className="text-sm font-medium">
            Mensagem
          </Label>
          <Textarea
            id="c-message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Como posso te ajudar?"
            rows={5}
            className="rounded-xl"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full gap-2 rounded-xl text-base">
        <WhatsappIcon className="size-5" />
        Enviar mensagem
      </Button>
    </form>
  )
}
