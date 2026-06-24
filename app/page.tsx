import { Hero } from '@/components/home/hero'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { AboutPreview } from '@/components/home/about-preview'
import { Benefits } from '@/components/home/benefits'
import { Testimonials } from '@/components/home/testimonials'
import { CtaSection } from '@/components/cta-section'

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
