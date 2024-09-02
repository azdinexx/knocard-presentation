
import React from 'react'

function ImageSlider() {
    return (
        <div className='w-full h-full '>
            <div className='w-full aspect-[4/3] bg-blue-300 rounded-lg'>i</div>
            <ul className='grid grid-cols-3 gap-10 p-10'>
                <div className='bg-blue-300 aspect-square rounded-lg'></div>
                <div className='bg-blue-300 aspect-square rounded-lg'></div>
                <div className='bg-blue-300 aspect-square rounded-lg'></div>
            </ul>
            <div className='flex justify-center gap-10'>
                <div>next</div>
                <div>prev</div>
            </div>
        </div>
    )
}

export default ImageSlider