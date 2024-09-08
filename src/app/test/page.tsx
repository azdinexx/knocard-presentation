import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-1/2 h-1/2 bg-red-500'>
                <Image src='/home.png' alt='home' width={100} height={100} />
            </div>
        </div>
    )
}

export default page