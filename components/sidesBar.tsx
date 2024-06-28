import React from 'react'

export default function SidesBar() {
    return (
        <div className='fixed h-screen w-screen z-10'>
            <div className='flex justify-between h-full pt-64 container mx-auto'>
                <div className='h-fit -rotate-90 mt-24 mr-5 font-extralight text-primary opacity-60 hidden md:block font-Poppins' style={{ transformOrigin: "left" }}>
                    Based In Morocco
                </div>
                <div></div>
            </div>
        </div>
    )
}
