import React from 'react'

function BeachwearCards({ image, name, price }) {
    return (
        <div className='mx-5 mt-12'>
            <div className='shadow-md rounded-lg border border-t-0'>
                <img src={image} alt='' className=' px-10 py-2'/>
            </div>
            <div className='text-center mt-5'>
                <p className='text-[#1E2021] font-semibold'>{name}</p>
                <p  className='text-[#1E2021] text-lg font-righteous'>{price}</p>
            </div>

        </div>
    )
}

export default BeachwearCards
