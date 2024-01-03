import React from 'react'
import { Link } from 'react-router-dom'

function TotalInfo() {
  return (
    <div>
    <div>
    <p className='font-Montserrat font-bold mb-4'>Gift card or discount code</p>
    <div className='flex'>
    <input type='text' placeholder='Enter gift card or discount code' className='text-[#BABABA] w-3/4 text-sm border p-2 font-poppins' />
    <p className='w-1/4 text-center bg-[#005342] text-white py-2 font-poppins text-sm cursor-pointer'>Apply</p>
    </div>
    <div className='border-b my-5'></div>
    <div className='flex justify-between mb-3'>
        <p className='text-sm font-bold font-poppins'>Subtotal</p>
        <p className='text-sm font-bold font-poppins'>₹2,029</p>
    </div>
    <div className='flex justify-between mb-3'>
        <p className='text-sm font-bold font-poppins'>Tax</p>
        <p className='text-sm font-bold font-poppins'>₹0</p>
    </div>
    <div className='flex justify-between mb-3'>
        <p className='text-sm font-bold font-poppins'>Shipping</p>
        <p className='text-sm font-bold font-poppins'>₹71</p>
    </div>
    <div className='border-b my-5'></div>
    <div className='flex justify-between mb-10'>
        <p className=' font-extrabold text-lg font-poppins'>Total</p>
        <p className=' font-extrabold text-lg font-poppins'>₹2,029</p>
    </div>
    <p className='w-full bg-[#00534252] py-2 text-center text-white font font-poppins rounded-lg cursor-pointer'>Pay now</p>
  
</div>
    </div>
  )
}

export default TotalInfo
