import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 '>
          <p>At AsFit, we believe fitness isn’t just a routine—it’s a lifestyle. That’s why we bring you high-quality activewear, fitness gear, and accessories designed to elevate your performance while keeping you stylish. Whether you’re hitting the gym, running outdoors, or simply embracing an active lifestyle, AsFit has got you covered!</p>
          <p>Push your limits and achieve your fitness goals with AsFit! We offer premium-quality sportswear and fitness essentials designed for durability, flexibility, and peak performance. Our products are crafted to support you in every workout, helping you train harder and move better.</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>At AsFit, we redefine activewear by blending comfort, style, and functionality. Our collection is designed to keep you looking good while feeling great—whether you're at the gym, on a run, or simply on the go. With high-performance fabrics and trendy designs, AsFit helps you stay fit in style</p>
          </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quanlity Assurance:</b>
          <p className='text-gray-600'>At AsFit, quality is at the core of everything we do. We take pride in offering premium fitness apparel, gear, and accessories that undergo rigorous testing to ensure durability, comfort, and performance.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>"At AsFit, we prioritize your convenience by offering a seamless shopping experience from start to finish. Our user-friendly website ensures effortless browsing, secure payments, and fast checkout.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>"At AsFit, our customers are at the heart of everything we do. Our dedicated support team is always ready to assist you with any inquiries, from product recommendations to order tracking and returns. We strive to provide a seamless shopping experience with quick response times, hassle-free exchanges, and personalized support.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About