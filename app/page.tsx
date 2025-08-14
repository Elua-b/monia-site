import Hero from '@/components/Hero'
import OurStory from '@/components/OurStory'
import Gallery from '@/components/Gallery'
import Venues from '@/components/Venues'
import DressCode from '@/components/DressCode'
import RSVP from '@/components/RSVP'
import Contributions from '@/components/Contributions'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-100 via-cream-200 to-gold-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-warm-300/40 to-gold-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-warm-400/40 to-cream-400/40 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-gold-400/40 to-stone-400/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-cream-500/40 to-warm-500/40 rounded-full blur-xl"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-warm-300/40 to-gold-300/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-warm-400/40 to-cream-400/40 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-gold-400/40 to-stone-400/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-cream-500/40 to-warm-500/40 rounded-full blur-xl"></div>
      </div>
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <OurStory />
        <Gallery />
        <Venues />
        <DressCode />
        <RSVP />
        <Contributions />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  )
}