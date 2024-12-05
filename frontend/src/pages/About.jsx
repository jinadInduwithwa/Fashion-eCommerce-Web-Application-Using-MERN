import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Arch 64, where fashion meets comfort and style! Founded with a passion for quality and a commitment to delivering the latest trends, Arch 64 is your go-to destination for clothing that speaks to your individuality.</p>
          <p>At Arch 64, we believe that fashion is more than just what you wear—it's an expression of who you are. Our carefully curated collections combine timeless classics with modern designs, ensuring there's something for everyone, no matter the occasion.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Arch 64, our mission is to empower individuals to express themselves through fashion while delivering quality, comfort, and affordability. We are dedicated to creating stylish and versatile clothing that enhances confidence, celebrates individuality, and stands the test of time.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Arch 64, quality is at the heart of everything we do. We are committed to delivering premium clothing that meets the highest standards of craftsmanship and durability. From selecting the finest materials to meticulous attention to detail during production, every piece in our collection is a testament to our dedication to excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Arch 64, we prioritize your convenience by offering a seamless shopping experience from start to finish. With a user-friendly website, fast and reliable delivery, hassle-free returns, and multiple secure payment options, we ensure that shopping for your favorite styles is effortless and enjoyable.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Arch 64, we are dedicated to providing exceptional customer service that goes beyond expectations. Our team is always ready to assist you with personalized support, ensuring your shopping experience is smooth, satisfying, and tailored to your needs. Your happiness is our priority.</p>
        </div>
      </div>
      <Newsletter/>
      
    </div>
  )
}

export default About
