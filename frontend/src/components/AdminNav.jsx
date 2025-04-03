import React, { useContext } from 'react'
import { assets } from '../assets/assets/admin_assets/assets'
import {ShopContext} from '../context/ShopContext'
const AdminNav = () => {
    const {navigate} = useContext(ShopContext)
  return (
    <div className='w-full h-10% mt-1 '>
        <div className='flex justify-between'>
            
          <img src={assets.logo} className='w-36 cursor-pointer ' alt=""  onClick={()=>navigate('/adminPanel')}/>
          <button className='mt-2 bg-gray-800 text-white  text-base font-light cursor-pointer hover:bg-gray-600 w-[4.5rem] h-[2.4rem]  rounded-2xl p-2 '>Logout</button>
          
        </div>
    </div>
  )
}

export default AdminNav