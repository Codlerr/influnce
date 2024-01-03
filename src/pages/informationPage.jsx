import React from 'react'
import StepperInfo from '../components/stepper/stepperInfo'
import Header2 from '../components/header2'
import Info from '../components/information/info'

function InformationPage() {
  return (
    <div>
    <Header2/>
    <p className='font-poppins ml-20'>Home/MyBag</p>
      <StepperInfo/>
      <Info/>
    </div>
  )
}

export default InformationPage
