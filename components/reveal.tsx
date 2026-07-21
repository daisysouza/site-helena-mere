'use client'

import { useOnScreen } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useOnScreen()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
