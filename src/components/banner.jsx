import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
      <div className='bg-banner h-96 rounded-lg flex justify-between items-end'>
        <div className='w-2/5'>
          <div className='mb-16'>
            <p className='text-[#84E75A] font-comfortaa w-full font-medium text-5xl pl-20'>Get Ready to
              Purchase </p>
            <p className='text-[#FFFFFF] pl-20 text-2xl'>the greatest sale this summer</p>
            <Link to='/products'>
              <p className='bg-[#84E75A] text-[#005342] w-1/5 ml-20 px-2 py-3 rounded-md mt-4 font-Quattrocento font-semibold cursor-pointer'>Shop now</p>
            </Link>
          </div>
        </div>
        <p className='text-[#FFFFFF] font-revalia font-light mr-5 mb-5'>SAIRISH</p>
      </div>

    </div>
  )
}

export default Banner
