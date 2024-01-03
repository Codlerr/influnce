import React, { useState } from 'react';
import TotalInfo from './totalInfo';
import { Link } from 'react-router-dom';

function Info() {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (
        <div className='flex'>
            <div className='w-1/2 ml-20 mr-20 mb-20'>
                <p className='font-Montserrat text-2xl font-bold mb-4'>Information</p>
                <p className='font-Montserrat mb-2'>Contact Information</p>
                <input type='text' placeholder='Your Email' className='border w-full p-1 rounded mb-3 px-2 font-poppins text-sm' />
                <br></br>
                <div className='flex'>

                </div>
                <p className='font-Montserrat mb-2'>Shipping address</p>
                <select
                    id="country"
                    name="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className='border p-1 px-2 mb-4 rounded font-poppins text-sm'
                >
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                </select>
                <br />
                <div className='flex'>
                    <input type='text' placeholder='First name' className='border w-1/2 p-1 mr-2 rounded px-2 font-poppins text-sm' />
                    <input type='text' placeholder='Last name' className='border w-1/2 p-1 rounded px-2 font-poppins text-sm' />
                </div>
                <br />
                <input type='text' placeholder='Address' className='border w-full p-1 rounded mb-3 px-2 font-poppins text-sm' />
                <br />
                <input type='text' placeholder='City' className='border w-full p-1 rounded mb-3 px-2 font-poppins text-sm' />

                <br />
                <select
                    id="country"
                    name="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className='w-full p-1 mb-3 border rounded font-poppins text-sm'
                >
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                </select>
                <br />

                <input type='text' placeholder='Postal Code' className='border w-full p-1 rounded mb-3 px-2 font-poppins text-sm' />
                <br />
                <input type='text' placeholder='Phone' className='border w-full p-1 rounded mb-3 px-2 font-poppins' />
                <br />

                <Link to='/shipping'>
                    <div className='flex justify-end'>
                        <p className='cursor-pointer bg-[#005342] rounded-lg px-10 text-white font-poppins text-sm p-2'>Save</p>
                    </div>
                </Link>
            </div>
            <div className='w-1/2 mr-20 mt-10'>
                <TotalInfo />
            </div>
        </div>
    )
}

export default Info
