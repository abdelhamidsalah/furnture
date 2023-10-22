import React from 'react'
import Product from './Product'
const ProductLists = ({data}) => {
  return (
    
    <span className='flex flex-wrap'>
    {
        data.map((item , index) => (
            <Product item={item} key={index}/>
        ))
    }
    
    
    </span>
    
  )
}

export default ProductLists