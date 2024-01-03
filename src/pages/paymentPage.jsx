import React from 'react'
import Header2 from '../components/header2'
import StepperInfo from '../components/stepper/stepperInfo'
import Payment from '../components/Payment/payment'

function PaymentPage() {
  return (
    <div>
    <Header2/>
    <p className='font-poppins ml-20'>Home/MyBag</p>
      <StepperInfo/>
      <Payment/>
    </div>
  )
}

export default PaymentPage
