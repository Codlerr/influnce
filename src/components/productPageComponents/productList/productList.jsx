import React from 'react'
import { RiLayoutGridFill } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import productListData from '../../../productListData';
import ProductListCard from './ProductListCard/productListCard';
function ProductList() {
  return (
    <div className='w-full px-4'>
      <div className='flex justify-between'>
        <div>
          <p className='font-poppins mb-4'>Home/New Arrivals</p>
        </div>
        <div className='flex'>
        <div className='flex mr-10 border border-gray-200 mb-4 p-1'>
          <RiLayoutGridFill size={17} className='mr-3'/>
          <BsFillGrid3X3GapFill className='text-[#005342]' />
          </div>
        <div>
        </div>
        <p className='mr-10 font-poppins mb-4'>Sort By: Featured </p></div>
        </div>
        
      <div className='grid grid-cols-3'>
        {productListData.map((item, index) => (
          <ProductListCard
            key={index}
            image={item.image}
            brand={item.brand}
            prdname={item.prdname}
            newPrize={item.newPrize}
            oldPrize={item.oldPrize}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
