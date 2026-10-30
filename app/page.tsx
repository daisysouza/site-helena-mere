import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { AboutPreview } from '@/components/home/about-preview'
import { Benefits } from '@/components/home/benefits'
import { Testimonials } from '@/components/home/testimonials'
import { CtaSection } from '@/components/cta-section'

const title = 'Imóveis à venda no Cabral, Contagem | Helena Mere'
const description =
  'Conheça apartamentos e imóveis à venda no bairro Cabral, em Contagem (MG), com a curadoria e o atendimento personalizado da corretora Helena Mere.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutPreview />
      <Benefits />
      <Testimonials />
      <CtaSection />
    </>
  )
}
