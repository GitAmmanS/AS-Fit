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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, architecto sint nulla quam veritatis porro debitis voluptatem aliquam temporibus quae magnam libero iure quaerat voluptate impedit qui ea quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem nostrum voluptatem ratione blanditiis perferendis aspernatur esse sunt, aliquid neque numquam corrupti a in soluta inventore quae qui fuga tempora!</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, vel porro. Quis aperiam modi quos minima mollitia eius obcaecati ab, atque, voluptas laborum aut aspernatur. Fuga dicta cupiditate repellendus magnam.</p>
          </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quanlity Assuran:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis non ipsa ducimus, debitis optio error doloribus ea nihil quod? Sed voluptatum praesentium dolore dignissimos blanditiis nobis, facilis tempore aut.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis non ipsa ducimus, debitis optio error doloribus ea nihil quod? Sed voluptatum praesentium dolore dignissimos blanditiis nobis, facilis tempore aut.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis non ipsa ducimus, debitis optio error doloribus ea nihil quod? Sed voluptatum praesentium dolore dignissimos blanditiis nobis, facilis tempore aut.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About