import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { FaDiscord, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
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
            className: "text-green-950 dark:text-secondary",
        },
    ];
    return (
        <div className='p-4 md:p-26 pt-0 h-screen pb-64'>
            <div className="container mx-auto flex flex-col items-center justify-center pt-28 h-full bg-gradient-to-b from-black to-[#131518]">
                <p className="text-primary text-xs sm:text-xl opacity-50 font-Poppins">
                    The road to freedom starts from here
                </p>
                <TypewriterEffectSmooth words={words} />
                <div className='flex flex-row gap-4 z-50'>
                    <a href="https://www.linkedin.com/in/omar-el-berhichi-23234425b/" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-black hover:bg-secondary rounded-sm hover:-rotate-45 duration-700'>
                        <FaLinkedinIn className=" text-white p-1" size={30} />
                    </a>
                    <a href="https://github.com/floki61" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-black rounded-sm hover:bg-secondary hover:-rotate-45 duration-700'>
                        <FaGithub className="text-white p-1" size={30} />
                    </a>
                    <a href="https://discord.com/users/757367428677238884" target="_blank" rel="noopener noreferrer" className='hover:underline flex flex-row items-center gap-2 bg-black rounded-md hover:bg-secondary hover:-rotate-45 duration-700'>
                        <FaDiscord className="text-white p-1" size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}
