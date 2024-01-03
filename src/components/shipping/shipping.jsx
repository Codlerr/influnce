import React, { useState } from 'react';
import TotalInfo from '../information/totalInfo';
import { Link } from 'react-router-dom';

function Shipping() {
    const [selectedOption, setSelectedOption] = useState('localPickup');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='ml-20 mb-20'>
            <div className='flex'>
                <div className='w-1/2'>
                    <div className='mr-40'>
                        <p className='font-Montserrat text-2xl font-bold mb-4'>Shipping</p>
                        <div className='flex justify-between mb-6 border p-4'>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        value="localPickup"
                                        checked={selectedOption === 'localPickup'}
                                        onChange={handleOptionChange}
                                    />
                                    <span className="ml-2 font-poppins">Local Pickup from store</span>
                                </label>
                                <p className='ml-5 text-xs font-poppins'>Delivery in 5-7 working days</p>
                            </div>
                            <p className='font-bold font-poppins text-sm'>Free</p>
                        </div>
                        <div className='flex justify-between border p-4'>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio text-[#005342]"
                                        value="standardShipping"
                                        checked={selectedOption === 'standardShipping'}
                                        onChange={handleOptionChange}
                                    />
                                    <span className="ml-2 font-poppins">Standard Shipping</span>
                                </label>
                                <p className='ml-5 text-xs font-poppins'>Delivery in 1-2 working days</p>
                            </div>
                            <p className='font-bold font-poppins text-sm'>$11.00</p>
                        </div>
                    </div>
                    <Link to='/paymentpage'>
                        <p className='cursor-pointer w-1/3 rounded text-sm text-center mb-20 mt-20 bg-[#005342] font-poppins py-2 text-white'>Proceed Payment</p>
                    </Link>
                </div>
                <div className='w-1/2 mr-20 mt-12'>
                    <TotalInfo />
                </div>
            </div>
        </div>
    )
}

export default Shipping;
