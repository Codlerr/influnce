import React from 'react'
import NewArrivalCard from '../components/newArrivalCard'
import newArrivalData from '../newArrivalData'
function NewArrivals() {
  return (
    <div className='grid grid-cols-3 mt-10 pl-20 pr-10'>
        {newArrivalData.map((item, index) => (
          <NewArrivalCard
            key={index}
            image={item.image}
            logo={item.logo}
            newArrival={item.newArrival}
          />
        ))}
      </div>
  )
}

export default NewArrivals
