import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import robo_logo from '../assets/robo_logo.png'

const Header = () => {

  const navigate = useNavigate()

  const { userData, isLoggedIn } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>

      {!userData?.isAccountVerified && (
        <div className="bg-[#f7d283] border border-yellow-400 text-yellow-800 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Notice: </strong>
          <span className="block sm:inline">Please verify your account to gain full access to the app.</span>
        </div>
      )}

      <img src={robo_logo} alt='Header image'
        className='w-36 h-36 rounded-full mb-6' />

      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
        Hey {userData && userData.role} {userData ? userData.name : 'Colleague'}!
        <img src={assets.hand_hi} alt="Hand wave" className='w-8 aspect-square' />
      </h1>

      <h2 className='text-3xl sm:text-5xl mb-4 font-semibold'>Welcome to our App</h2>
      {isLoggedIn === false ? <>
        <p className='mb-8 max-w-md'>Get started—just click the button below to begin your journey through our secure and complete Authentication System!</p>
        <button onClick={() => navigate('/login')} className='border border-gray-500 text-gray-200 rounded-full px-8 py-2 bg-[#493a62] hover:bg-slate-800 transition-all'>Get Started</button>
      </>
        : <p className='mb-8 max-w-md'>Your journey just started through our secure and complete Authentication System!</p>
      }
    </div>
  )
}

export default Header