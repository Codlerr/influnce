import React from 'react'
import { Link } from 'react-router-dom'
function NewArrivalCard({ image, logo, newArrival }) {
  return (
    <div className='w-full relative  mr-10 mb-16' >
      <Link to='/products'>
        <img src={image} alt='' className="cursor-pointer" />
      </Link>
      <div className='absolute bottom-10 left-16 flex flex-col items-center bg-[#F4F4F4F0] px-10 py-5'>
        <img src={logo} alt='' className='' />
        <p>Limited stock of {newArrival}</p>
      </div>
    </div>

  )
}

export default NewArrivalCard
