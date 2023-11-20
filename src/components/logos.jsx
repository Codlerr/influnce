import React from 'react'
import Logo from '../logo'
function Logos() {
  return (
    <div className='flex mt-10 '>

    {Logo.map((item, index) => (
      <div key={index} className='bg-[#F4F4F4F0] px-10 pt-10 rounded-lg mx-2 h-28' >
        <img src={item.image} className=' w-24' />
      </div>
    ))}
    </div>
  )
}

export default Logos
