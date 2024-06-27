import React from 'react'

export default function SidesBar() {
    return (
        <div className='fixed h-screen w-screen'>
            <div className='flex justify-between h-full pt-64 container mx-auto'>
                <div className='text h-fit -rotate-90 mt-24 ml-3 font-extralight text-green-600 opacity-60 hidden md:block ' style={{ transformOrigin: "left" }}>
                    Lovely 2024
                </div>
                <div></div>
            </div>
        </div>
    )
}
