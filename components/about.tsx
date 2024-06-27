import React from 'react'
import Image from 'next/image'


export default function About() {
    return (
        <div className='h-screen bg-black'>
            <div className='container mx-auto p-4 md:p-26 pb-0 pt-0 h-screen'>
                <div className="h-screen container mx-auto bg-[#131518] rounded-md">
                    <div className='flex flex-col sm:justify-center lg:flex-row lg:items-center lg:space-x-8 h-full w-full p-10 sm:pt-36 pt-24'>
                        {/* <div className='h-[50vw] w-full lg:h-[400px] lg:w-[1800px] md:h-[50vw] flex flex-col justify-center'>
                            <p className='  font-meledrama font-bold text-2xl'>
                                <span className=' text-green-700'>1. </span>
                                <span className='text-green-700'> About</span>
                            </p>
                            <div className='w-full'>
                                <h2 className=' leading-tight pt-4 pb-1 text-5xl text-[#98887d]'>Hey, I'm Omar El Berhichi</h2>
                                <div className="w-16 border border-green-700 leading-4 mb-6 "></div>
                            </div>
                            <h4 className='mb-4 font-custom capitalize  font-extralight text-xl text-[#98887d] leading-7'>And i am a full-stack developer raised in sunny Agadir Morocco. Currently, I am a student at 1337 School, a 42-like school located in Ben Guerir, Where I am honing my skills in various fields of computer Science and design principles.</h4>
                            <span className='hover:underline font-extrabold pt-4 pb-6 text-[black]'>Resume</span>
                        </div> */}
                        <div className=''>
                            <p className='  font-meledrama font-bold text-2xl' id='about'>
                                <span className=' text-green-700'>1. </span>
                                <span className='text-green-700'> About</span>
                            </p>
                            <div className='w-full '>
                                <h2 className=' leading-tight pt-4 pb-1 text-5xl text-[#98887d]'>Hey, I'm Omar El Berhichi</h2>
                                {/* <h2 className='sm:hidden lg:inline-block text-green-900'>Hey, I'm Omar El Berhichi</h2> */}
                            </div>

                            <div className="w-16 border border-green-700 leading-4 mb-6 "></div>
                            <h4 className='mb-4 font-custom capitalize  font-extralight text-base sm:text-xl text-[#98887d] leading-7'>And i am a full-stack developer raised in sunny Agadir Morocco. Currently, I am a student at 1337 School, a 42-like school located in Ben Guerir, Where I am honing my skills in various fields of computer Science and design principles.</h4>
                            <button className='hover:underline font-custom font-extrabold pt-2 sm:pb-6 pb-2 text-xl sm:text-2xl line-through'>Resume</button>
                        </div>
                        <div className='relative space-y-2 h-[60vh] sm:h-[50vw] w-full lg:h-[400px] lg:w-[1800px]  md:h-[50vw]'>
                            <Image src='/zwin2.png' alt='ana' fill objectFit='cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
