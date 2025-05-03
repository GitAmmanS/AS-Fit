import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'
const SideMenu = () => {
    return (
        <div className=' border-l-2 border-r-2 '>

            <NavLink to='/addItems' className=''>
                <div className='flex justify-center gap-2 mt-5 border-t border-b px-2 py-1 w-[10rem] active:bg-orange-400 active:border-orange-950 '>
                    <img src={assets.add_icon} className='w-[1.5rem]' alt="" />
                    <p>Add Items</p>
                </div>
            </NavLink>
            <NavLink to='/listItems' className=''>
                <div className='flex justify-center gap-2 mt-5 border-t border-b px-2 py-1 w-[10rem] active:bg-orange-400 active:border-orange-950'>
                    <img src={assets.order_icon} className='w-[1.5rem]' alt="" />
                    <p>List Items</p>
                </div>
            </NavLink>
            <NavLink to='/orders' className=''>
                <div className='flex justify-center gap-2 mt-5 border-t border-b px-2 py-1 w-[10rem] active:bg-orange-400 active:border-orange-950'>
                    <img src={assets.order_icon} className='w-[1.5rem]' alt="" />
                    <p>All Orders</p>
                </div>
            </NavLink>
        </div>
    )
}

export default SideMenu