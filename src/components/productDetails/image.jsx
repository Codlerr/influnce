import React from 'react'
import det1 from '../../assets/det1.png'
import det2 from '../../assets/det2.png'
import det3 from '../../assets/det3.png'
import det4 from '../../assets/det4.png'
function ProdImage() {
  return (
    <div className='flex ml-20 mt-10 mb-0 h-screen'>
    <div className='mr-8'>
      <img src={det1} alt='' className='h-32 mb-8' />
      <img src={det2} alt='' className='h-32 mb-8'/>
      <img src={det3} alt='' className='h-32 mb-8'/>
      <img src={det4} alt='' className='h-32'/>
      </div>
      <div>
      <img src={det4} alt='' className='h-screen ml-10'/>
      </div>
    </div>
  )
}

export default ProdImage
