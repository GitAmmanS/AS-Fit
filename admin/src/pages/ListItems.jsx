import React, { useContext, useEffect } from 'react'
import {AdminContext} from '../context/AdminContext'
import { BaseUrl } from '../utils/BaseUrl'
const ListItems = () => {
  const {products} = useContext(AdminContext);
  
  return (
    <div className='mt-[2rem] ml-1 h-screen '>
      <table className=' '>
      <thead className='border-t-2 border-b-2  text-xl px-5 '>
        <tr>
        
          <th className='px-20 text-gray-700 py-1'>ID</th>
          <th className='px-20 text-gray-700 py-1'>NAME</th>
          <th className='px-20 text-gray-700 py-1'>IMAGE</th>
          <th className='px-20 text-gray-700 py-1'>SIZE</th>
          <th className='px-20 text-gray-700 py-1'>PRICE</th>
         
        </tr>
        </thead>
        <tbody>
          {
            products.map((item,index)=>(
            <tr key={index} className='text-sm even:bg-amber-200 font-medium'>
              <td className='text-center  text-gray-900 px-3  py-3'>{item._id}</td>
              <td className='text-center  text-gray-900 px-3  py-3'>{item.name}</td>
              <td className='flex justify-center  text-gray-900 px-3  py-3'><img src={`${BaseUrl}/${item.image[0]}`} className='w-20' alt="" /></td>
              <td className='text-center  text-gray-900 px-3   py-3'>{item.sizes}</td>
              <td className='text-center  text-gray-900 px-3  py-3'>{item.price}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <div className='mb-10 h-[30%]' >
          
      </div>
    </div>
  )
}

export default ListItems