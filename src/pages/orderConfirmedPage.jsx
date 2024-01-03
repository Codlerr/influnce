import React from 'react'
import success from '../assets/successful.png'
import { Link } from 'react-router-dom'
function OrderConfirmedPage() {
  return (
    <div>
    <p className='font-poppins ml-20'>Home/OrderSuccessful</p>
    <div className='flex flex-col items-center justify-center h-screen'>
    
    <div className='flex flex-col items-center'>
      <img src={success} alt='' className='w-44' />
      <p className='font-Montserrat text-3xl mt-5'>Thank you for your order!</p>
      <p className='font-poppins text-lg w-3/5 my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='bg-[#005342] mb-10 rounded-lg'>
    <Link to='/'>
      <p className='cursor-pointer font-poppins text-lg align-middle text-white p-3 px-20 '>Go back shopping</p>
      </Link>
      </div>
  </div>
  
    </div>
  )
}

export default OrderConfirmedPage
