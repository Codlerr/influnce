import React from 'react'

import { Link } from 'react-router-dom'
function ProductListCard({ image, brand, prdname, newPrize, oldPrize}) {
  return (
    <div className=''>
    <Link to='/details'>
      <img src={image} alt='' />
      </Link>
      <p className='font-poppins font-bold mt-4'>{brand}</p>
      <p className='font-poppins '>{prdname}</p>
      <div className='flex mb-4'>
      <p className='mr-5 text-[#005342] font-bold font-poppins'>₹{newPrize}</p>
      <p className='text-[#8E8E8E] font-poppins text-xs mt-1 line-through'>₹{oldPrize}</p>
      </div>
    </div>
  )
}

export default ProductListCard
