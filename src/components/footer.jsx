import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import footer from '../assets/footer.png'

function Footer() {
    return (
        <div className='h-full bg-black relative pb-20'>
            <p className='text-white font-semibold text-3xl px-28 pt-16 pb-5'>Ready to elevate your Fashion?</p>
            <p className='text-white font-semibold text-3xl underline px-28'>Get Started </p>
            <div className='w-4/5 grid grid-cols-4 pl-28 mt-10 '>
                <div className='flex mr-10'>
                    <p className='text-white font-medium text-xl'>Shop</p>
                    <MdArrowDropDown size={25} className='text-white' />
                </div>
                <p className='text-white font-medium text-xl mr-10'>Most awaited</p>
                <p className='text-white font-medium text-xl mr-10'>New arrival</p>
                <p className='text-white font-medium text-xl'>Brands</p>
            </div>
            <div className='grid grid-cols-2 mt-10 pl-28 w-4/5'>
                <div>
                    <p className='mb-8 text-white font-medium '>Contact Us</p>
                    <p className='text-white font-extralight'>INFLUNC<br></br>
                        Shopify Plus Agency<br></br>
                        25 Queen Square, Bath, BA1 2HX<br></br>
                        01225 580 037<br></br>
                        hello@blubolt.com</p>
                </div>
                <div>
                    <p className='mb-8 text-white font-medium '>About us</p>
                    <p className='text-white font-extralight'>We’re on a mission to raise<br></br>
                        awareness. </p>
                    <p className='text-white font-extralight mt-10'>Learn more about<br></br>
                        our charity fundraising.</p>
                </div>
            <div className='absolute right-0 bottom-0' >
                <img src={footer} alt='' className='h-64 ' />
            </div>
            </div>
        </div>
    )
}

export default Footer
