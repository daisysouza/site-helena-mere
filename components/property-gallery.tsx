'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PropertyGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const [thumbLoaded, setThumbLoaded] = useState<Record<number, boolean>>({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%')
  const [isZooming, setIsZooming] = useState(false)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'center',
  })

  const [lbRef, lbApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'center',
  })

  const onMainSelect = useCallback(() => {
    if (!emblaApi) return
    const idx = emblaApi.selectedScrollSnap()
    setActive(idx)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onMainSelect)
    onMainSelect()
    return () => {
      emblaApi.off('select', onMainSelect)
    }
  }, [emblaApi, onMainSelect])

  const onLbSelect = useCallback(() => {
    if (!lbApi) return
    setLbIndex(lbApi.selectedScrollSnap())
  }, [lbApi])

  useEffect(() => {
    if (!lbApi) return
    lbApi.on('select', onLbSelect)
    return () => {
      lbApi.off('select', onLbSelect)
    }
  }, [lbApi, onLbSelect])

  useEffect(() => {
    if (!lightboxOpen || !lbApi) return
    lbApi.scrollTo(lbIndex)
  }, [lightboxOpen, lbApi, lbIndex])

  useEffect(() => {
    if (!lightboxOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lbApi?.scrollPrev()
      if (e.key === 'ArrowRight') lbApi?.scrollNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, lbApi])

  useEffect(() => {
    setIsZooming(false)
  }, [active])

  const openLightbox = useCallback((index: number) => {
    setLbIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setZoomOrigin(`${x}% ${y}%`)
    },
    [],
  )

  return (
    <>
      <div>
        {/* Main carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-2xl">
            <div className="flex">
              {images.map((img, i) => (
                <div
                  key={img + i}
                  className="relative flex-none basis-full cursor-zoom-in overflow-hidden"
                  onMouseEnter={() => setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                  onMouseMove={handleMouseMove}
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ampliar foto ${i + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openLightbox(i)
                  }}
                >
                  <div className="relative aspect-[16/10]">
                    {loaded[i] !== true && (
                      <div className="absolute inset-0 animate-pulse rounded-2xl bg-muted" />
                    )}
                    <Image
                      src={img || '/placeholder.svg'}
                      alt={`${title} - foto ${i + 1}`}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className={cn(
                        'rounded-2xl object-cover transition-opacity duration-300',
                        loaded[i] === true ? 'opacity-100' : 'opacity-0',
                        isZooming && 'scale-[1.3] transition-transform duration-500 ease-out',
                      )}
                      style={isZooming ? { transformOrigin: zoomOrigin } : undefined}
                      onLoad={() =>
                        setLoaded((prev) => ({ ...prev, [i]: true }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute right-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold tracking-wide text-background backdrop-blur-sm sm:text-sm">
            {active + 1} / {images.length}
          </div>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  emblaApi?.scrollPrev()
                }}
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-2.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background md:inline-flex"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  emblaApi?.scrollNext()
                }}
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-2.5 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background md:inline-flex"
                aria-label="Próxima foto"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          {/* Expand */}
          <button
            type="button"
            onClick={() => openLightbox(active)}
            className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm transition-colors hover:bg-foreground sm:text-sm"
            aria-label="Abrir em tela cheia"
          >
            <Expand className="size-4" />
            <span className="hidden sm:inline">Tela cheia</span>
          </button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 sm:gap-3">
              {images.map((img, i) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={cn(
                    'relative flex-none overflow-hidden rounded-lg ring-2 transition-all duration-200',
                    'aspect-[4/3] w-16 sm:w-20 md:w-24',
                    active === i
                      ? 'ring-primary opacity-100'
                      : 'ring-transparent opacity-60 hover:opacity-100',
                  )}
                >
                  {thumbLoaded[i] !== true && (
                    <div className="absolute inset-0 animate-pulse bg-muted" />
                  )}
                  <Image
                    src={img || '/placeholder.svg'}
                    alt={`${title} - miniatura ${i + 1}`}
                    fill
                    sizes="100px"
                    className={cn(
                      'object-cover transition-opacity duration-200',
                      thumbLoaded[i] === true ? 'opacity-100' : 'opacity-0',
                    )}
                    onLoad={() =>
                      setThumbLoaded((prev) => ({ ...prev, [i]: true }))
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          role="dialog"
          aria-label="Galeria de fotos"
          aria-modal="true"
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Fechar galeria"
          >
            <X className="size-5" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {lbIndex + 1} / {images.length}
          </div>

          {/* Carousel */}
          <div
            ref={lbRef}
            className="h-full w-full cursor-grab active:cursor-grabbing"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox()
            }}
          >
            <div className="flex h-full items-center">
              {images.map((img, i) => (
                <div
                  key={img + i}
                  className="relative flex-none basis-full h-full"
                >
                  <div className="relative mx-auto flex h-full max-w-[90vw] items-center justify-center px-4 py-16 md:px-16 md:py-20">
                    <div className="relative aspect-[4/3] h-full w-full max-h-[80vh]">
                      <Image
                        src={img || '/placeholder.svg'}
                        alt={`${title} - foto ${i + 1}`}
                        fill
                        className="object-contain"
                        sizes="90vw"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => lbApi?.scrollPrev()}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-5 sm:p-3.5"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>
              <button
                type="button"
                onClick={() => lbApi?.scrollNext()}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-5 sm:p-3.5"
                aria-label="Próxima foto"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
