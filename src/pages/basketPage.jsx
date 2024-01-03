import React from 'react'
import Header2 from '../components/header2'
import StepperBasket from '../components/stepper/stepperBasket'
import Basket from '../components/basket/basket'
function BasketPage() {
  return (
    <div>
      <Header2/>
      <p className='font-poppins ml-20'>Home/MyBag</p>
        <StepperBasket/>
        <Basket/>
      
    </div>
  )
}

export default BasketPage
