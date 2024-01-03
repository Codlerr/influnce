import React from 'react'
import Description from '../components/productDetails/description'
import Details from '../components/productDetails/details'
import ProdImage from '../components/productDetails/image'
import Reviews from '../components/productDetails/reviews'
import YouMightAlsoLike from '../components/productDetails/youMightAlsoLike'

function ProductDetailsPage() {
  return (
    <div>
    <p className='font-poppins ml-20'>Home/New Arrivals/Berra </p>
    <div className='flex justify-between'>
    <ProdImage className='w-2/3'/>
    <Details className='w-1/3'/>
    </div>
    <Description/>
    <Reviews/>
    <YouMightAlsoLike/>
    </div>
  )
}

export default ProductDetailsPage
