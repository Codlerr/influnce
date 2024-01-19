import React, { useState } from 'react'
import profile from '../../assets/pro.png'
import AddressCard from './addressCard'

function Profile() {
    const [prof, setProf] = useState(true)
    const [adr, setAdr] = useState(false)

    const profiledet = () => {
        setAdr(false)
        setProf(true)
    }
    const adrdet = () => {
        setAdr(true)
        setProf(false)
    }
    return (
        <div className='flex mx-20 mb-32'>
            <div className='w-1/4 border-r'>
                {prof ?
                    <p className='font-poppins text-[#005342] font-extrabold border-b-2 pb-4 mr-10 border-b-[#005342]' onClick={profiledet}>Profile  details</p>
                    :
                    <p className='font-poppins text-[#282828] pb-4' onClick={profiledet}>Profile  details</p>
                }
                {adr ?
                    <p className='font-poppins text-[#005342] font-extrabold border-b-2 pb-4 mr-10 border-b-[#005342] mt-5' onClick={adrdet}>Addresses</p>
                    :
                    <p className='font-poppins text-[#282828] pb-4 mt-5' onClick={adrdet}>Addresses</p>
                }
            </div>

            <div className='w-2/4 mx-20'>
                {prof ?
                    <div>
                        <p className='font-Montserrat font-bold mb-5'>Edit Profile</p>
                        <p className='font-bold text-[#0D0D0C] mb-2'>Username </p>
                        <input type='text' placeholder='Enter Username or Email' onChange={(e) => setEmailId(e.target.value)} className='border w-full p-3 border-[#005342] rounded-lg mb-7 px-2 text-sm font-poppins' />
                        <p className='font-bold text-[#0D0D0C] mb-2'>Mobile number</p>
                        <input type='text' placeholder='Enter Username or Email' onChange={(e) => setEmailId(e.target.value)} className='border w-full p-3 border-[#005342] rounded-lg mb-7 px-2 text-sm font-poppins' />
                        <p className='font-bold text-[#0D0D0C] mb-2'>Email ID</p>
                        <input type='text' placeholder='Enter Username or Email' onChange={(e) => setEmailId(e.target.value)} className='border w-full p-3 border-[#005342] rounded-lg mb-7 px-2 text-sm font-poppins' />
                        <p className='bg-[#005342] rounded-3xl mb-4 p-3 text-white flex justify-center cursor-pointer' >Save changes</p>
                    </div>
                    :
                    <div>
                        <p className='font-Montserrat font-bold mb-5'>Saved addresses</p>
                        
                        <p className='font-bold text-[#0D0D0C] mb-2'>Default address </p>
                        <AddressCard/>
                    </div>
                }
            </div>

            <div className='w-1/4 mx-20'>
            {prof ? 
                <div>
                <img src={profile} alt='' className='rounded-full h-52 w-52' />
                <p className='ml-16 mt-5 font-bold underline'>Edit picture</p>
                </div>
                :
                <div>
                <p className='bg-[#005342] rounded-3xl mb-4 p-3 text-white flex justify-center cursor-pointer' >Add new</p>
                </div>
            }
            </div>
        </div>
    )
}

export default Profile
