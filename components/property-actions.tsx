'use client'

import { useState, useCallback } from 'react'
import { Heart, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/properties'

export function PropertyActions({
  slug,
  title,
  price,
}: {
  slug: string
  title: string
  price: number
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = useCallback(() => {
    setIsFavorite((prev) => !prev)
  }, [])

  const handleShare = useCallback(async () => {
    const url = `${window.location.origin}/imoveis/${slug}`
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: `${title} - ${formatPrice(price)}`,
          url,
        })
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url)
    }
  }, [slug, title, price])

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleFavorite}
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-200 hover:bg-muted',
          isFavorite && 'text-destructive',
        )}
        aria-label={
          isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
        }
      >
        <Heart className={cn('size-4', isFavorite && 'fill-current')} />
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-200 hover:bg-muted"
        aria-label="Compartilhar imóvel"
      >
        <Share2 className="size-4" />
      </button>
    </div>
  )
}
