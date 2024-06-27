import React from 'react'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='fixed w-full z-50 md:pt-16 pt-0 backdrop-blur-md'>
            <div className='container mx-auto'>
                <div className='flex justify-between border-b-[0.05px] border-green-500 border-opacity-20 md::p-0 p-6 pt-0 pb-0'>
                    <div className='sm:w-[5vw] sm:h-[5vw] w-[50px] h-[50px] relative'>
                        <Image src="/logo.png" alt="" fill objectFit='cover' />
                    </div>
                    <div className='text-green-500 opacity-30 text-xs md:text-lg flex items-center hover:rotate-180 hover:text-white'>
                        site under construction
                    </div>
                </div>
            </div>
        </div>
    )
}
