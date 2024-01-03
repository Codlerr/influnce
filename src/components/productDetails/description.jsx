import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Description() {
  return (
    <div className='ml-20 w-1/2 mt-10'>
    <div className='flex'>
      <p className='font-poppins font-bold mr-5'>Description</p>
      <p className='font-poppins font-bold mr-5'>Size & Fit</p>
      <p className='font-poppins font-bold mr-5'>Shipping & Return</p>
      </div>
<div className='border-b-2 w-full my-3'></div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries</p>
       <div className='flex'>
       <FaCheck />
       <p>100% pima cotton</p>
       </div>
       <div className='flex'>
       <FaCheck />
       <p>100% pima cotton</p>
       </div>
       <div className='flex'>
       <FaCheck />
       <p>100% pima cotton</p>
       </div>
       <div className='flex'>
       <FaCheck />
       <p>100% pima cotton</p>
       </div>
    </div>
  )
}

export default Description
