import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { BaseUrl } from '../utils/BaseUrl';
const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <div>
        <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition duration-500 ease-in-out' src={`${BaseUrl}/${image[0]}`} alt="no product" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='pb-0 text-sm font-medium'>{price}{currency}</p>
        </Link>
    </div>
  )
}

export default ProductItem