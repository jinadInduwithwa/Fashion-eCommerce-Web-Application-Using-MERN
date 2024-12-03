import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className="flex flex-col gap-14 my-8 mb-2 mt-40 text-sm">
      {/* Footer Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-1 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Arch 64 - Redefining fashion with timeless style and quality. Explore, express, and elevate your wardrobe with us.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94 1234567890</li>
            <li>arch64.clothing@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full">
        <hr className="border-gray-300" />
        <p className=" text-sm text-center text-gray-600">
          &copy; 2024 Arch64.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
