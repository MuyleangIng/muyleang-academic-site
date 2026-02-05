'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import About from '@/components/about'
import Research from '@/components/research'
import Conference from '@/components/conference'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  const [activeSection, setActiveSection] = useState('hello')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        
        <section id="hello" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl">
              Welcome to my academic portfolio. I am a Cambodian AI and Quantum Computing researcher currently pursuing my Master's degree at Pukyong National University in South Korea.
            </p>
          </div>
        </section>

        <About />
        <Research />
        <Conference />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
