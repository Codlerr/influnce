import React from 'react'
import BasketItem from './basketItem'
import { Link } from 'react-router-dom'
function Basket() {
  return (
    <div className='ml-20'>
      <div className='flex'>
        <p className='font-Montserrat text-2xl font-bold mr-4'>My Bag</p>
        <p className='font-poppins'>(2 Item)</p>
      </div>
      <BasketItem />
      <Link to='/info'>
      <p className='cursor-pointer w-1/3 rounded text-sm text-center mb-20 mt-20 bg-[#005342] font-poppins py-2 text-white'>Proceed</p>
      </Link>
    </div>
  )
}

export default Basket
