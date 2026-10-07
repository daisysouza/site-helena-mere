'use client'

import { useState, useCallback } from 'react'
import { Heart, Share2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/properties'
import { buildPropertyMessage } from '@/lib/whatsapp'

export function PropertyActions({ property }: { property: Property }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [heartKey, setHeartKey] = useState(0)
  const [shared, setShared] = useState(false)

  const handleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev)
    setHeartKey((k) => k + 1)
  }, [])

  const handleShare = useCallback(async () => {
    const text = buildPropertyMessage(property)
    const url = new URL(
      `/imoveis/${property.slug}`,
      window.location.origin,
    ).toString()
    if (navigator.share) {
      try {
        await navigator.share({ title: property.title, text, url })
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(text)
      setShared(true)
      setTimeout(() => setShared(false), 1500)
    }
  }, [property])

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleFavorite}
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-150 hover:bg-muted active:scale-90',
          isFavorite && 'text-destructive',
        )}
        aria-label={
          isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
        }
      >
        <Heart key={heartKey} className={cn('size-4', isFavorite && 'fill-current animate-heart-pop')} />
      </button>
      <button
        type="button"
        onClick={handleShare}
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-150 hover:bg-muted active:scale-90',
          shared && 'text-primary',
        )}
        aria-label="Compartilhar imóvel"
      >
        {shared ? (
          <Check className="size-4 animate-check-pop" />
        ) : (
          <Share2 className="size-4" />
        )}
      </button>
    </div>
  )
}
