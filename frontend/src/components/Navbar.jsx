import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function Navbar() {
    const [visible,setVisible] = useState(false);
    const {setShowSearch, getCardCount} = useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-3 front-medium '>
        <Link to='/'>
        <img src={assets.logo} className='w-20' alt='logo'/>
        </Link>
        

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer'  onClick={()=>setShowSearch(true)}/>

            <div className='group relative'>
                <Link to={'./login'} ><img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' /></Link>
                <div className='group-hover:block hidden absolute z-50 dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded' >
                        <p className='coursor-poinytyer hover:text-black'>Profile</p>
                        <p className='coursor-poinytyer hover:text-black'>Order</p>
                        <p className='coursor-poinytyer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCardCount()}</p>
            </Link>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden' />
        </div>
        {/* side bar menu */}
        <div className={`absolute z-50 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-700 '>
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
                    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                <NavLink to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>HOME</NavLink>
                <NavLink to='/collection' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>COLLECTION</NavLink>
                <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>CONTACT</NavLink>
                <NavLink to='/about' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>ABOUT</NavLink>
            </div>
        </div>      
    </div>
  )
}

export default Navbar
