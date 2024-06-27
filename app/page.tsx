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

export default function page() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Omar.",
      className: "text-green-950 dark:text-green-900",
    },
  ];
  return (
    <div className='bg-black'>
      <section className='container mx-auto p-4 pb-0 pt-20 md:p-20 md:pb-0 md:pt-64 lg:p-36 lg:pb-0 lg:pt-64 h-screen'>
        <EvervaultCard text="Hover" />
      </section>
      <section>
        <About />
      </section>
      <section>
        {/* <TracingBeam className=" borderi w-full"> */}
        <Projects />
        {/* </TracingBeam> */}
      </section>
      <section className='h-screen bg-[#131518]'>
        <div className='pt-40'>
          <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 text-xs sm:text-xl">
              The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className='flex flex-row gap-4 z-50'>
              <a href="https://www.linkedin.com/in/omar-el-berhichi-23234425b/" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-green-950 hover:bg-black rounded-sm hover:-rotate-45 duration-700'>
                <FaLinkedinIn className=" text-white p-1" size={30} />
              </a>
              <a href="https://github.com/floki61" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-green-950 rounded-sm hover:bg-black hover:-rotate-45 duration-700'>
                <FaGithub className="text-white p-1" size={30} />
              </a>
              <a href="https://discord.com/users/757367428677238884" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-green-950 rounded-md hover:bg-black hover:-rotate-45 duration-700'>
                <FaDiscord className="text-white p-1" size={30} />
              </a>
            </div>
          </div>
          {/* <WavyBackground className="max-w-4xl mx-auto pb-40"> */}
          {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hero waves are cool
              </p>
              <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Leverage the power of canvas to create a beautiful hero section
              </p> */}

          {/* </WavyBackground> */}
        </div>
      </section>
      {/* </div> */}
    </div>
  )
}
