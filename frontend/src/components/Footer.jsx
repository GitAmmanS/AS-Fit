import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus veniam explicabo alias commodi! Quidem provident repellat, nihil magnam laudantium consequuntur unde est cum eligendi id eos saepe et aut aliquid?
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92-3259055292</li>
                    <li>ammansajjad42@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className=''>
            <hr className='text-gray-400 mt-4'/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ astech.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer