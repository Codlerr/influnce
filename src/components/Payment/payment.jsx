import React, { useState } from 'react';
import { LiaCcVisa } from "react-icons/lia";
import { Link } from 'react-router-dom';
import master from '../../assets/master.png';
import paypal from '../../assets/paypal.png';

function Payment() {
    const [selectedOption, setSelectedOption] = useState('localPickup');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleMonthChange = (event) => {
        setExpiryMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setExpiryYear(event.target.value);
    };

    return (
        <div className='flex ml-40 mb-20 mt-10'>
            <div className='w-1/2'>
                <div className='mr-20'>
                    <p className='font-Montserrat text-2xl font-bold mb-4'>Shipping</p>
                    <div className='flex justify-between mb-6 border p-3 w-full'>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    value="localPickup"
                                    checked={selectedOption === 'localPickup'}
                                    onChange={handleOptionChange}
                                />
                                <span className="ml-2 font-poppins">Credit Card</span>
                            </label>
                        </div>
                        <div className='flex'>
                            <img src={master} alt='' className='mr-3 w-5 mt-1 h-5' />
                            <LiaCcVisa size={25} />
                        </div>
                    </div>
                    {selectedOption === 'localPickup' && (
                        <div>
                            <input type="text" placeholder="Card Number" className='border w-full mb-2 p-1 mr-2 rounded px-2 font-poppins text-sm' />
                            <input type="text" placeholder="Name on card" className='border w-full mb-2 p-1 mr-2 rounded px-2 font-poppins text-sm' />
                            <div className="flex mb-2">
                                <select value={expiryMonth} onChange={handleMonthChange} className='border rounded font-poppins text-sm'>
                                    <option value="january" disabled>Select Month</option>
                                    {/* Add options for months */}
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    {/* ... (add other months) */}
                                </select>
                                <select value={expiryYear} onChange={handleYearChange} className='border rounded ml-2 font-poppins text-sm'>
                                    <option value="2022" disabled>Select Year</option>
                                    {/* Add options for years */}
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    {/* ... (add other years) */}
                                </select>
                                <input type="text" placeholder="CVV" className='border w-full ml-2 rounded px-2 font-poppins text-sm' />

                            </div>
                        </div>
                    )}
                    <div className='flex justify-between border p-3 w-full'>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    value="standardShipping"
                                    checked={selectedOption === 'standardShipping'}
                                    onChange={handleOptionChange}
                                />
                                <span className="ml-2 font-poppins">Paypal</span>
                            </label>
                        </div>
                        <img src={paypal} alt='' className='w-4 h-4' />
                    </div>
                </div>
                
            </div>
            <div className='w-1/2 mr-20 px-20 mt-12'>
                <div>
                    <p className='font-Montserrat font-bold mb-4'>Gift card or discount code</p>
                    <div className='flex'>
                        <input type='text' placeholder='Enter gift card or discount code' className='text-[#BABABA] w-3/4 text-sm border p-2 font-poppins' />
                        <p className='w-1/4 text-center bg-[#005342] text-white py-2 font-poppins text-sm cursor-pointer'>Apply</p>
                    </div>
                    <div className='border-b my-5'></div>
                    <div className='flex justify-between mb-3'>
                        <p className='text-sm font-bold font-poppins'>Subtotal</p>
                        <p className='text-sm font-bold font-poppins'>₹2,029</p>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <p className='text-sm font-bold font-poppins'>Tax</p>
                        <p className='text-sm font-bold font-poppins'>₹0</p>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <p className='text-sm font-bold font-poppins'>Shipping</p>
                        <p className='text-sm font-bold font-poppins'>₹71</p>
                    </div>
                    <div className='border-b my-5'></div>
                    <div className='flex justify-between mb-10'>
                        <p className=' font-extrabold text-lg font-poppins'>Total</p>
                        <p className=' font-extrabold text-lg font-poppins'>₹2,029</p>
                    </div>
                    <Link to='/successful'>
                        <p className='w-full bg-[#005342] py-2 text-center text-white font font-poppins rounded-lg cursor-pointer'>Pay now</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payment;
