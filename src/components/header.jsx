import React from 'react'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import {SlMenu} from 'react-icons/sl'
import logo from '../assets/INFLUNCE.png'
import {MdArrowDropDown} from 'react-icons/md'
import search from '../assets/search.png'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";
function Header() {
  return (
    <div className='flex px-20 py-8 justify-between'>
    <div className='flex mr-16 w-1/5'>
    <SlMenu size={25} className='cursor-pointer'/>
    <Link to='/'>
    <img src={logo} className='h-6 ml-6 cursor-pointer' alt='' />
    </Link>
    </div>
    <div className='flex w-5/12 mt-1'>
    <div className='flex mr-10'>
    <p className='font-questrial cursor-pointer'>Shop</p>
    <MdArrowDropDown size={25} className='cursor-pointer'/>
    </div>
    <p className='font-questrial mr-10 cursor-pointer'>Most awaited</p>
    <p className='font-questrial mr-10 cursor-pointer'>New arrival</p>
    <p className='font-questrial mr-10 cursor-pointer'>Brands</p>
    </div>
    <div className='flex mr-10'>
    <img src={search} alt='' className='h-4 absolute mt-2 ml-4' />
    <input
    type="search"
    name="search"
    className="w-full pr-10 pl-20 text-xs text-white bg-[#C0BBAC38] rounded-3xl h-9"
  />
    </div>
    <Link to='/basket'>
    <LiaShoppingBagSolid size={30} className='mt-1 mr-10 cursor-pointer'/>
    </Link>
    <BsPersonCircle size={25} className='h-10 cursor-pointer'/>

      
    </div>
  )
}

export default Header
