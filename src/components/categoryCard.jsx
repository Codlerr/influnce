import React from 'react'
import ethnicwear from '../assets/ethnicwear.png'
import actiivewear from '../assets/activewear.png'
import sportswear from '../assets/sportswear.png'
import dresses from '../assets/dresses.png'
import footwear from '../assets/footwear.png'
import wedding from '../assets/wedding.png'
import handwear from '../assets/handwear.png'
import eyewear from '../assets/eyewear.png'
function CategoryCard() {
    return (
        <div className='grid grid-cols-4 '>
            <div>
                <img src={ethnicwear} alt='' />
                <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>Ethinic Wear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={actiivewear} alt='' />
                <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>Active Wear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={sportswear} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>Sports Wear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={dresses} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>Dresses</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={footwear} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>FootWear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={wedding} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>Wedding</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={handwear} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>HandWear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
            <div >
                <img src={eyewear} alt='' />
                 <div className='mt-5'>
                <p className='font-righteous text-xl text-center'>EyeWear</p>
                <p className='text-center font-public-sans text-[#676767]'>Flat 50% Off</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
