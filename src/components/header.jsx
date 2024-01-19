import React, { useEffect, useState } from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { SlMenu } from 'react-icons/sl';
import logo from '../assets/INFLUNCE.png';
import { MdArrowDropDown } from 'react-icons/md';
import search from '../assets/search.png';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import * as urls from "../Urls";
import axios from "axios";
import pro from '../assets/3.png'

function Header() {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [emailId, setEmailId] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [forgotMail, setForgotMail] = useState(false)
  const [isLogged, setIsLogged] = useState(false);
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [Confirm, setConfirm] = useState('');


  const openProfileModal = () => {
    setProfileModalOpen(true);
    setRegisterOpen(false)
    setForgotOpen(false)
    document.body.style.overflow = 'hidden';
  };
  const openRegister = () => {
    setRegisterOpen(true);
    setProfileModalOpen(false)
    setForgotOpen(false)
  };
  const openForgot = () => {
    setRegisterOpen(false);
    setProfileModalOpen(false)
    setForgotOpen(true)
  };

  const closeProfileModal = () => {
    document.body.style.overflow = '';
    setProfileModalOpen(false);
    setRegisterOpen(false)
    setForgotOpen(false)
    setForgotMail(false)
    setEmailId('')
    setLoginPassword('')
    setRegEmail('')
    setRegName('')
    setRegPassword('')
    setConfirm('')
  }
  const mailSent = () => {
    setRegisterOpen(false);
    setProfileModalOpen(false)
    setForgotOpen(true)
    setForgotMail(true)

  }
  useEffect(() => {
    let deviceId = localStorage.getItem('Device-id');
    if (!deviceId) {
      deviceId = generateDeviceId();
      localStorage.setItem('Device-id', deviceId);
    }
    console.log('Device ID:', deviceId);
  }, []);

  const generateDeviceId = () => {
    return 'device_' + Math.random().toString(36).substring(2, 15);
  };

  const loginHandler = () => {
    const body = {
      username: emailId,
      password: loginPassword,
    };
    const headers = {
      'Device-Id': localStorage.getItem('Device-id') || '',
      'App-Type': 'web',
      'Content-Type': 'application/json'
    };
    axios
      .post(urls.Login, body, { headers })
      .then((response) => {
        console.log(response);
        if (response.data.statusCode === 200) {
          closeProfileModal();
          setIsLogged(true);
        }

      })

  };
  const registerHandler = () => {
    const body = {
      username: regName,
      email: regEmail,
      password: regPassword,
      confirmPassword: Confirm
    };
    const headers = {
      'Device-Id': localStorage.getItem('Device-id') || '',
      'App-Type': 'web',
      'Content-Type': 'application/json'
    };
    axios
      .post(urls.register, body, { headers })
      .then((response1) => {
        if (response1.data.statusCode === 200) {
          closeProfileModal();
        } else console.log("registration failed");
      })
  };
  return (
    <div className='flex px-20 py-8 justify-between'>
      <div className='flex mr-16 w-1/5'>
        <SlMenu size={25} className='cursor-pointer' />
        <Link to='/'>
          <img src={logo} className='h-6 ml-6 cursor-pointer' alt='' />
        </Link>
      </div>
      <div className='flex w-5/12 mt-1'>
        <div className='flex mr-10'>
          <p className='font-questrial cursor-pointer'>Shop</p>
          <MdArrowDropDown size={25} className='cursor-pointer' />
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
        <LiaShoppingBagSolid size={30} className='mt-1 mr-10 cursor-pointer' />
      </Link>
      {isLogged ? (
        <div>
          <Link to='/profilepage'>
            <img src={pro} alt='' className='h-10 w-10 rounded-full' />
          </Link>
        </div>
      ) : (
        <div onClick={openProfileModal} className='cursor-pointer'>
          <BsPersonCircle size={25} className='h-10' />
        </div>
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white w-1/3 h-5/6 p-8 rounded-lg'>
            <div className='flex justify-between'>
              <p className='text-2xl font-extrabold'>Sign in to Influnce</p>
              <RxCross1 onClick={closeProfileModal} className='cursor-pointer' size={25} />
            </div>
            <div className='flex mt-8 border-black border rounded-2xl mx-2 p-2 cursor-pointer justify-center'>
              <FcGoogle className='mr-2' size={20} />
              <p className='font-bold'>Sign in with Google</p>
            </div>
            <div className='flex justify-evenly my-5'>
              <div className='border-b border-[#BFBFBF] w-1/4 mb-2'></div>
              <p className=''>or sign in with email</p>
              <div className='border-b w-1/4 border-[#BFBFBF] mb-2'></div>
            </div>
            <p className='font-bold mb-2'>Username or Email</p>
            <input type='text' placeholder='Enter Username or Email' value={emailId} onChange={(e) => setEmailId(e.target.value)} className='border w-full p-3 border-[#005342] rounded-lg mb-7 px-2 text-sm font-poppins' />
            <div className='flex justify-between'>
              <p className='font-bold mb-2'>Password</p>
              <p className='font-bold mb-2 underline cursor-pointer' value={loginPassword} onClick={openForgot}>Forgot?</p>
            </div>
            <input type='password' onChange={(e) => setLoginPassword(e.target.value)} placeholder='8 character password' className='border w-full p-3 text-sm border-[#005342] rounded-lg mb-7 px-2 font-poppins' />

            <p className='bg-[#005342] rounded-3xl mb-4 p-3 text-white flex justify-center cursor-pointer' onClick={loginHandler}>Sign in</p>

            <p className='text-sm mr-2 flex justify-center' onClick={openRegister}>Don’t have an account? <span className='underline cursor-pointer'>Sign Up</span></p>
          </div>
        </div>
      )}

      {/*register*/}
      {registerOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white w-1/3 h-11/12 p-6 rounded-lg'>
            <div className='flex justify-between'>
              <p className='text-2xl mb-2 font-extrabold'>Sign up to Influnce</p>
              <RxCross1 onClick={closeProfileModal} className='cursor-pointer' size={25} />
            </div>

            <p className='font-bold mb-2'>Username or Email</p>
            <input type='text' placeholder='Enter Username'
              onChange={(e) => setRegName(e.target.value)}
              className='border w-full p-2 border-[#005342] rounded-lg mb-2 px-2 text-sm font-poppins'
            />
            <p className='font-bold mb-2'>Email Id</p>
            <input type='text' placeholder='Enter EmailId'
              onChange={(e) => setRegEmail(e.target.value)}
              className='border w-full p-2 border-[#005342] rounded-lg mb-2 px-2 text-sm font-poppins'
            />

            <p className='font-bold mb-2'>Password</p>

            <input type='password'
              onChange={(e) => setRegPassword(e.target.value)}
              placeholder='8 character password'
              className='border w-full p-2 text-sm border-[#005342] rounded-lg mb-2 px-2 font-poppins'
            />

            <p className='font-bold mb-2'>Confirm Password</p>
            <input type='text' placeholder='confirm password'
              onChange={(e) => setConfirm(e.target.value)}
              className='border w-full p-2 border-[#005342] rounded-lg mb-2 px-2 text-sm font-poppins'
            />

            <p className='bg-[#005342] rounded-3xl mb-4 p-3 mt-2 cursor-pointer text-white flex justify-center'
              onClick={registerHandler}>Register</p>

            <div className='flex justify-evenly my-5'>
              <div className='border-b border-[#BFBFBF] w-1/4 mb-2'></div>
              <p className=''>or sign in with email</p>
              <div className='border-b w-1/4 border-[#BFBFBF] mb-2'></div>
            </div>

            <div className='flex border-black border rounded-2xl mx-2 p-2 cursor-pointer justify-center'>
              <FcGoogle className='mr-2' size={20} />
              <p className='font-bold'>Sign in with Google</p>
            </div>

            <p className='mt-4 text-sm mr-2 flex justify-center'
              onClick={openProfileModal}>Already have an account?
              <span className='underline cursor-pointer'>Sign in</span></p>

          </div>
        </div>
      )}

      {/*forgot password*/}
      {forgotOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white w-1/3 h-2/5 p-6 rounded-lg'>
            <div className='flex justify-between'>
              <p className='text-2xl mb-2 font-extrabold'>Forgot your password?</p>
              <RxCross1 onClick={closeProfileModal} className='cursor-pointer' size={25} />
            </div>
            <div>
              {forgotMail ?
                <p className='mt-10 text-center font-bold'>We have send a magic link in the Registered Email or Phone number to reset the password</p>
                :
                <div>
                  <p className='font-bold mb-2'>Registered Email or Phone number</p>
                  <input type='text' placeholder='Enter Email or Phone number used for registration' className='border w-full p-2 border-[#005342] rounded-lg mb-4 px-2 text-sm font-poppins' />
                  <p className='bg-[#005342] rounded-3xl mb-4 p-3 text-white flex justify-center' onClick={mailSent}>Reset my password</p>
                </div>
              }
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default Header
