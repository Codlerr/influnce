import React from 'react'
import Header2 from '../components/header2'
import StepperShipping from '../components/stepper/stepperShipping'
import Shipping from '../components/shipping/shipping'

function ShippingPage() {
  return (
    <div>
    <Header2/>
    <p className='font-poppins ml-20'>Home/MyBag</p>
      <StepperShipping/>
      <Shipping/>
    </div>
  )
}

export default ShippingPage
