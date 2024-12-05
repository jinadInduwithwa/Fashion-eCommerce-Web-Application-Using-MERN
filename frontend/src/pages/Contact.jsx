import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-500'>No: 100 <br /> Main Street, Matara</p>
          <p className='text-gray-500'>Tel: 074-1234567890 <br />arch64.clothing@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Best @ Foreever</p>
        </div>
      </div>

    </div>
    
  )
}

export default Contact
