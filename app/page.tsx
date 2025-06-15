import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import RushProcess from '@/components/RushProcess'
import Values from '@/components/Values'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <RushProcess />
      <Values />
      <Contact />
    </main>
  )
} 