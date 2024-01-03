import React from 'react'
import YouMightData from '../../youMightData'
import YouMightCard from './youMightCard'
function YouMightAlsoLike() {
  return (
    <div>
    <p className='text-2xl font-bold text-center'>You might also like</p>
    <div className='grid grid-cols-3 mt-10 pl-20 pr-10'>
        {YouMightData.map((item, index) => (
          <YouMightCard
            key={index}
            image1={item.image1}
            logo1={item.logo1}
            newArrival1={item.newArrival1}
          />
        ))}
      </div>
      </div>
  )
}

export default YouMightAlsoLike
