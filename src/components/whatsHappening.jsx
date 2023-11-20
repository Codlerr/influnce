import React from 'react'
import wh1 from '../assets/wh1.png'
import wh2 from '../assets/wh2.png'
import wh3 from '../assets/wh3.png'

function WhatsHappening() {
    const Card = [
        {
            image: `${wh1}`,
        },
        {
            image: `${wh2}`,
        },
        {
            image: `${wh3}`,
        }
    ]
    return (
        <div className='my-20'>
            <p className='text-[#0D0D0C] text-4xl font-bold text-center'>What’s Happening</p>
            <div className='grid grid-cols-3 mx-24 mt-10'>
            {Card.map((item) => (
                <div className='mx-10'>
                    <img src={item.image} alt='' />
                    <p className='text-[#E39B6A] mt-5 font-semibold'>#BLOG</p>
                    <p className='text-[#232323] mt-2 text-xl font-semibold'>Expanding visibility, trust, and sales with their</p>
                    <p className='mt-3 text-xl font-semibold underline'>Read more</p>
                </div>
            ))}
            </div>

        </div>
    )
}

export default WhatsHappening
