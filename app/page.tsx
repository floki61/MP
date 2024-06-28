'use client'
import { EvervaultCard } from '@/components/ui/evervault-card'
import React from 'react'
import Image from 'next/image'
import About from '@/components/about'
import Projects from '@/components/projects';
import { TracingBeam } from '@/components/ui/tracing-beam'
import { WavyBackground } from '@/components/ui/wavy-background'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { FaLinkedin, FaGithub, FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className=''>
      <section>
        <EvervaultCard text='Hover' />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
