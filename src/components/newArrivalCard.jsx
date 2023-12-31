import React from 'react'
import { Link } from 'react-router-dom'
function NewArrivalCard({ image, logo, newArrival }) {
  return (
    <div className='w-full relative mr-10 mb-16'>
  <Link to='/products'>
    <img src={image} alt='' className="cursor-pointer" />
  </Link>
  <div className='absolute top-0 right-12 bg-[#84E75A] text-white p-2 text-center w-1/5 h-1/4 rounded-tr-3xl rounded-bl-3xl'>
    <p className='font-extrabold text-xl text-black font-public-sans leading-tight'>3</p>
    <p className='font-bold text-sm  text-black font-public-sans leading-tight'>  new</p>
    <p className='font-bold text-sm text-black font-public-sans leading-tight'>launch</p>
  </div>
  <div className='absolute bottom-10 left-16 flex flex-col items-center bg-[#F4F4F4F0] px-10 py-5'>
    <img src={logo} alt='' className='' />
    <p>Limited stock of {newArrival}</p>
  </div>
</div>


  )
}

export default NewArrivalCard
