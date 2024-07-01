import React from 'react'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='fixed w-full z-50 pt-4 sm:pt-10  sm:p-12 sm:pb-0 p-4 pb-0 backdrop-blur-md'>
            <div className='flex justify-between border-b-[0.05px] border-primary border-opacity-20 pb-2'>
                <div className=' md:h-[6vw] md:w-[6vw] lg:h-[5vw] lg:w-[5vw] w-[7vh] h-[7vh] relative'>
                    <Image src="/logo.png" alt="" fill objectFit='cover' />
                </div>
                <div className='text-primary opacity-30 text-xs md:text-lg flex items-center hover:rotate-180 hover:text-white font-Poppins'>
                    site under construction
                </div>
            </div>
        </div>
    )
}
