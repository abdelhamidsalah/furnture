import React from 'react'
import { Container , Row, Col  , ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
    <Container>
    <Row>
    <Col lg='4'>
    <div >
    <h2>Multimart</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when </p>
    </div>
    </Col>

    <Col lg='3'>
    <div >
    <h2>Top Categories</h2>
   
    <ListGroupItem className='border-0 ps-0'>
    <Link to='#' className='lin pt-11'>Mobile Phones</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='#' className='lin '>Modern Sofa</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='#' className='lin'>Arm Chair</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='#' className='lin'>Smart Watches</Link>
    </ListGroupItem>
    
    </div>
    </Col>

    <Col lg='2'>
    
    <div>
    <h2>Useful Links</h2>
   
    <ListGroupItem className='border-0 ps-0'>
    <Link to='/shop' className='lin'>Shop</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='/cart' className='lin'>Cart</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='/login' className='lin'>Login</Link>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0'>
    <Link to='#' className='lin'>Privacy Policy</Link>
    </ListGroupItem>
    
    </div>
   
    </Col>

    <Col lg='3'>
    <div >
    <h2>Contact</h2>
   
    <ListGroupItem className='border-0 ps-0 d-flex gap-2'>
    <span className='text-white'><i class="fa-solid fa-location-dot"></i></span>
     <p>123 ZindaBazar, Sythat, Bangladish</p>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0 d-flex gap-2'>
    <span className='text-white'><i class="fa-solid fa-phone"></i></span>
     <p>+0887431245</p>
    </ListGroupItem>
    <ListGroupItem className='border-0 ps-0 d-flex gap-2'>
    <span className='text-white'><i class="fa-regular fa-envelope"></i></span>
     <p>example123@gmail.com</p>
    </ListGroupItem>
   
    
    </div>
    </Col>
    <Col lg='12'>
    <p className='copy text-center pt-[30px]'>Copyright {year} developed by Abdelhamid salah. All rights reserved.</p>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Footer