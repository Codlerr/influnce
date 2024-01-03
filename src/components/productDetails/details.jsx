import React from 'react'
import QuantityButton from '../quantity'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div className='mr-20 mt-10'>
      <p className='font-poppins font-bold text-lg'>BERRA</p>
      <p className='font-poppins font-bold text-xl'>Women Yellow Pure Cotton Floral Print Straight Kurta</p>
      <div className='flex justify-between mt-10'>
      <div className='flex'>
      <p className='text-[#005342] font-bold font-poppins mr-4'>₹2960</p>
      <p className='text-[#8E8E8E] font-poppins text-xs mt-1 line-through'>₹4960</p>
      </div>
      <p className='text-[#84E75A] font-poppins text-sm font-bold'>Flat 50% off</p>
      </div>
      <div className='flex mt-5'>
      <p className='font-poppins font-bold mr-2 text-sm'>Color </p><p className='text-sm'>(Yellow)</p>
      </div>
      <div className='bg-yellow-500 rounded-full my-2 w-4 h-4 border'></div>
      <div className='flex justify-between mt-5'>
      <p className='font-poppins font-bold mr-2 text-sm mb-2 mt-5'>Size</p>
      <p className='font-poppins font-bold mr-2 text-[#7C3FFF] text-xs mb-2 mt-5'>Size Guide</p>
      </div>
      <div className='grid grid-cols-4 space-x-4 mb-5'>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>XS</p>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>S</p>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>M</p>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>L</p>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>XL</p>
      <p className='border text-sm rounded-xl px-3 py-1 text-center pt-1 mb-4'>XXL</p>
      </div>
      <div className='flex justify-between'>
      <p className='font-poppins font-bold mr-2 text-sm mt-4'>Quantity</p>
      <QuantityButton/>
      </div>
      <p className='cursor-pointer w-full rounded text-sm text-center mb-2 mt-5 bg-[#005342] font-poppins py-2 text-white'>Add to Cart</p>
      <Link to='/basket'>
      <p className='cursor-pointer w-full rounded text-sm text-center mb-4 border border-[gray] font-poppins py-2 '>Buy Now</p>
      </Link>
    </div>
  )
}

export default Details
