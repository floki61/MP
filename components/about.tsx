import React from 'react'
import Image from 'next/image'


export default function About() {
    return (
        <div className='min-h-screen bg-black'>
            <div className='p-4 md:p-26 pb-0 pt-0 '>
                <div className="container mx-auto bg-gradient-to-b from-[#131518]">
                    <div className='h-screen flex flex-col sm:justify-center lg:flex-row lg:items-center lg:space-x-8 w-full p-10 sm:pt-36 pt-24'>
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
                            <p className='font-meledrama font-bold text-2xl' id='about'>
                                <span className='text-secondary'>About Me</span>
                            </p>
                            <div className='w-full '>
                                <h2 className=' leading-tight pt-4 pb-1 text-5xl text-primary'>Hey, I'm Omar El Berhichi</h2>
                                <div className="w-16 border border-primary leading-4 mb-6 "></div>
                            </div>

                            <h4 className='mb-4 font-custom capitalize  font-extralight text-sm sm:text-xl text-[#98887d] sm:leading-7 leading-6'>And i am a full-stack developer raised in Agadir, Morocco, a city known for its stunning beaches and breathtaking sunsets. Currently, I am a student at 1337 School, a 42-like school located in Ben Guerir, where I am honing my skills in various fields of computer science, and web development.</h4>
                            <button className='hover:underline font-custom font-extrabold pt-2 sm:pb-6 pb-2 text-xl sm:text-2xl line-through text-primary opacity-30'>Resume</button>
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
