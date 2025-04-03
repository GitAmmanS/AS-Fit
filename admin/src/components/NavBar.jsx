import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/admin_assets/assets';
const NavBar = () => {
    const {navigate} = useContext(AdminContext);
  return (
    <div className='w-full h-10% mt-1 '>
    <div className='flex justify-between '>
        
      <img src={assets.asfit_logo} className='w-16 cursor-pointer ' alt=""  onClick={()=>navigate('/')}/>
      <button className=' bg-gray-800 text-white  text-base font-light cursor-pointer hover:bg-gray-600 w-[4.5rem] h-[2.4rem]  rounded-2xl p-2 '>Logout</button>
      
    </div>
    <hr />
</div>
  )
}

export default NavBar