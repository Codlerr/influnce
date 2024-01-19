import React from 'react'

function AddressCard() {
  return (
    <div className='border border-[#005342] rounded-lg p-5'>
      <p className='font-bold'>Ragavan Lowerence</p>
      <p>6/1, # 156, 2nd Main Rd, Idgha Road Varthur <br></br>
      Whitefield<br></br>
      Bengaluru - 560067<br></br>
      Karnataka</p>
      <div className='flex mt-3'>
      <p className='text-[#005342] border-r border-[#005342] pr-5 font-bold'>Edit</p>
      <p className='text-[#005342] pl-5 font-bold'>Remove</p>
      </div>
    </div>
  )
}

export default AddressCard
