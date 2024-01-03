import React from 'react'
import prof from '../../assets/prof.png'
import { IoStar } from "react-icons/io5";
import OverallRating from './overallRating';
function Reviews() {
  return (
    <div className='bg-[#FFF8F5] p-20 mt-10 '>
    <div className='flex justify-between'>
      <div className='w-3/5 mr-10'>
        <p className='font-Montserrat font-bold text-2xl mb-10'>Customer Reviews</p>
        <div className='flex'>
          <img src={prof} alt='' className='h-16 w-16 mr-4' />
          <div>
            <p className='font-bold font-poppins'>Lolla Smith</p>
            <p className='font-poppins text-sm'>30 July 2022</p>
            <div className='flex mt-2'>
              <IoStar className='mr-1 text-[#005342]' />
              <IoStar className='mr-1 text-[#005342]' />
              <IoStar className='mr-1 text-[#005342]' />
              <IoStar className='mr-1 text-[#005342]' />
              <IoStar className='mr-1 text-[#005342]' />
              <p className='font-poppins text-xs mb-2'>Very good</p>
            </div>
            <p className='font-poppins text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

        </div>
        <div className='border-b w-full my-3'></div>
        <p className='font-Montserrat text-sm'>Load more</p>
      </div>
      

      <OverallRating />
      </div>
    </div>
  )
}

export default Reviews
