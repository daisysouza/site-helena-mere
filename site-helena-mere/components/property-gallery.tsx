'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function PropertyGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={images[active] || '/placeholder.svg'}
          alt={`${title} - foto ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={cn(
                'relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition-all',
                active === i
                  ? 'ring-primary'
                  : 'ring-transparent hover:ring-border',
              )}
            >
              <Image
                src={img || '/placeholder.svg'}
                alt={`${title} - miniatura ${i + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
