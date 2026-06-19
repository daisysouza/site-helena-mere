import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Helena Mêre Corretora | Imóveis em Contagem e Belo Horizonte',
    template: '%s | Helena Mêre Corretora',
  },
  description:
    'Encontre o lugar certo para viver com a Helena Mêre. Atendimento boutique e personalizado para venda e compra de imóveis em Contagem, Cabral e Belo Horizonte.',
  keywords: [
    'imóveis',
    'corretora',
    'Contagem',
    'Belo Horizonte',
    'Cabral',
    'casas',
    'apartamentos',
    'Helena Mêre',
  ],
  openGraph: {
    title: 'Helena Mêre Corretora | Imóveis Premium em MG',
    description: 'Soluções completas em compra, venda e locação de imóveis na região metropolitana de Belo Horizonte',
    url: 'https://helenamere.com.br',
    siteName: 'Helena Mêre Corretora',
    images: [
      {
        url: '/images/helena-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Helena Mêre - Corretora de Imóveis',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helena Mêre Corretora | Imóveis Premium em MG',
    description: 'Atendimento personalizado para encontrar seu imóvel dos sonhos',
    images: ['/images/helena-portrait.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#028940',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsappFloat />
          {process.env.NODE_ENV === 'production' && (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
