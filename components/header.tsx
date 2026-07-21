'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { WhatsappIcon } from '@/components/icons'
import { navLinks, siteConfig, whatsappLink } from '@/lib/site'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-3 leading-none">
          <Image
            src="/images/logohelenamere.png"
            alt="Helena Mêre Corretora"
            width={120}
            height={36}
            className="h-14 w-auto md:h-14"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-xl">
              Helena Mêre
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary md:text-[11px]">
              Corretora de Imóveis
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full">
            <a
              href={whatsappLink(
                `Olá ${siteConfig.name}, gostaria de mais informações.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsappIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-border bg-background transition-all duration-200 ease-out lg:hidden',
          open
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0',
        )}
        style={{ display: 'grid' }}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-muted',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 rounded-full">
              <a
                href={whatsappLink(
                  `Olá ${siteConfig.name}, gostaria de mais informações.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <WhatsappIcon className="size-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
