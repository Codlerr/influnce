import React from 'react'
import img1 from '../../assets/1.png'
import QuantityButton from '../quantity'
import { ImBin } from "react-icons/im";
function BasketItem() {
  return (
    <div className='flex my-10 w-1/4'>
      <img src={img1} alt='' className='h-40 mr-12' />
      <div>
        <p className='font-Montserrat font-bold text-xl mb-1'>name</p>
        <p className='font-poppins text-[#E39B6A] font-bold text-lg mb-10'>₹2,029</p>
        <p className='font-Montserrat text-sm mb-2'>color/size</p>
        <div className='flex justify-between'>
          <QuantityButton />
          <ImBin size={16} className='ml-20 mt-2' />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
