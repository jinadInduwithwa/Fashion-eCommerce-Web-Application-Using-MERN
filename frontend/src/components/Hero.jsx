import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Hero() {
  return (
    <div className="relative w-full">
      {/* Small Screen Image */}
      <img 
        src={assets.sm_Hero} 
        alt="small hero image" 
        className="block w-full h-auto sm:hidden z-10" 
      />
      {/* Large Screen Image */}
      <img 
        src={assets.lg_Hero} 
        alt="large hero image" 
        className="hidden w-full h-auto sm:block z-10" 
      />

      <button 
        className="block absolute bottom-4 left-1/2 transform -translate-x-1/2 shadow-black bg-black text-white  px-6 py-2 rounded-3xl shadow-lg hover:cursor-pointer"
      >
        SHOP THE DROP
      </button>

      
    </div>
  );
}

export default Hero;
