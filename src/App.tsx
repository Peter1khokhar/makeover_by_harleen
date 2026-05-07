import { useScrollProgress } from './hooks/useScrollProgress'
import { Navbar } from './components/Navbar'
import { FloatingBrush } from './components/FloatingBrush'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { RecentWorks } from './components/RecentWorks'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import {About} from './components/Aboutus'

export default function App() {
  const { scrollY, progress } = useScrollProgress()

  return (
    <>
      <FloatingBrush scrollY={scrollY} progress={progress} />
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main className="site-main">
        <Hero />
        <Services />
        <Gallery />
        <RecentWorks />
        <About/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
