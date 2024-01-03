import React from 'react'
import ProductList from '../components/productPageComponents/productList/productList'
import Filter from '../components/productPageComponents/filter/filter'
function ProductsPage() {
  return (
    <div>
    <div className='flex'>
      <div className='w-2/6'>
        <Filter />
      </div>
      <div className='w-4/6'>
        <ProductList />
      </div>
    </div>
    </div>
  )
}

export default ProductsPage
