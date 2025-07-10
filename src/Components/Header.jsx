import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    
    <div className='bg-gray-950   p-4  text-gray-400'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='flex text-white'><h1 className='text-2xl font-extrabold'>

            <img className='h-6  items-center' src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg" alt="" /> </h1>
          </div>

        </div>
        <div className='flex font-semibold  items-center gap-8'>
          <p className='flex hover:text-white cursor-pointer items-center gap-2 font-semibold'><img className='h-5 invert' src="src/assets/menuu.png" alt="" /> our products</p>
          <button className='flex gap-3 bg-gray-800 p-3 pr-4 semibold hover:text-white cursor-pointer'> <img className='h-6 hover:invert invert-50 ' src="src/assets/store.png" alt="img" /> Sign in</button>
        </div>
      </div>
      <div className='flex gap-6 mt-6'>
        <p className='cursor-pointer hover:text-white font-semibold  '  ><NavLink
          to="/Headerweb"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : ""
          }
        >
          Home
        </NavLink></p>
        <p className='cursor-pointer hover:text-white font-semibold' ><NavLink to="/MusicSearch" className={({ isActive }) =>
          isActive ? "text-white font-bold" : ""} >Live Music</NavLink>
          </p>
        <p className='cursor-pointer hover:text-white font-semibold' ><NavLink className={({ isActive }) =>
          isActive ? "text-white font-bold" : ""
        } to="/Youtube">Youtube</NavLink></p>
        <NavLink className={({ isActive }) =>
          isActive ? "text-white font-bold" : ""} to="/Weather">Weather</NavLink>

        <p >|</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Ultimited Downloads</p>
      </div>
    </div>

  )
}

export default Header
