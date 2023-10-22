import React from 'react'
import {Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/slices/CartSlice'
import {  toast } from 'react-toastify';
const Product = ({item}) => {
  const dispatch = useDispatch()
  const addTocart = () => {
    dispatch(
      cartActions.addItem({
        id:item.id,
        productName: item.productName,
        price : item.price,
        imgUrl : item.imgUrl
      })
    )
    toast.success('product added successfully')
  }
  return (
    
   <Col lg='3' md='4'>
   <div className='productitem m-[40px]'>
   <div>
   <motion.img src={item.imgUrl} alt='pho' whileHover={{scale:1.1}}></motion.img>
   </div>
   <div className='info'>
   <h3>
   <Link to={`/shop/${item.id}`} className='lin'>{item.productName}</Link>
   </h3>
   <span>{item.category}</span>
   </div>
   <div className='bottom flex justify-between mt-[20px]'>
   <span className='price'>${item.price}</span>
   <motion.span whileTap={{scale:1.2}} onClick={addTocart} ><i class="ri-add-line"></i></motion.span>
   </div>
   </div>
   </Col>
   
  )
}

export default Product