import React from 'react'
import Ashlynn from '../assets/Ashlynn.png'
import Haylie from '../assets/Haylie.png'
import Mira from '../assets/Mira.png'
import Alena from '../assets/Alena.png'

function VideoCard() {
    return (
        <div className='grid grid-cols-4 mt-10 mb-20' >
            <div className=' relative mr-10 mb-16'>
                <img src={Ashlynn} alt='' className='w-full' />
                <div className='absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute bottom-5 left-5 '>
                    <p className='text-[#FFFFFF] font-semibold text-lg'>Ashlynn</p>
                    <p className='text-white'>200K</p>
                </div>
            </div>
            <div className='relative mr-10 mb-16'>
                <img src={Haylie} alt='' className='w-full'/>
                <div className='absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute bottom-5 left-5 '>
                    <p className='text-[#FFFFFF] font-semibold text-lg'>Haylie</p>
                    <p className='text-white'>500K</p>
                </div>
            </div>
            <div className=' relative mr-10 mb-16'>
                <img src={Mira} alt='' className='w-full' />
                <div className='absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute bottom-5 left-5'>
                    <p className='text-[#FFFFFF] font-semibold text-lg'>Mira</p>
                    <p className='text-white'>1.3M</p>
                </div>
            </div>
            <div className=' relative mr-10 mb-16'>
    <img src={Alena} alt='' className='w-full' />
    <div className='absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black'></div>
    <div className='absolute bottom-5 left-5'>
        <p className='text-[#FFFFFF] font-semibold text-lg'>Alena</p>
        <p className='text-white'>2.3M</p>
    </div>
    
</div>

        </div>
    )
}

export default VideoCard
