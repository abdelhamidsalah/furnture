import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Helmet from '../components/Helmet'
import Common from '../components/Common'
import './Checkout .css'
const Checkout = () => {
  return (
    <div >
    <Helmet title='Checkout'>
    <Common title='Checkout'/>
    <div className='check'>
    <Container>
    <Row>
    <Col lg='8' >
    <h6>Billing Information</h6>
    <form >
    <div className='f1'>
    <input type='text' placeholder='Enter Your Name'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='email' placeholder='Enter Your Email'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='text' placeholder='Phone Number'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='text' placeholder='Street Address'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='text' placeholder='City'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='text' placeholder='Postal Code'></input>
    </div>
<br></br>
    <div className='f1'>
    <input type='text' placeholder='Country'></input>
    </div>
    </form>
    </Col>

    <Col lg='4'>
    <div className='check2'>
    <h6><span>Total Qty:</span> <span>0</span></h6>
    <h6><span>Subtotal:</span> <span>$0</span></h6>
    <h6><span>Shipping:</span> <span>$0</span></h6>
    <h6><span>Free Shipping:</span></h6>
    <h4 className='free'><span>Total:</span> <span>$999</span></h4>
    <button>Place Order Now</button>
    </div>
    
    </Col>
    </Row>
    </Container>
    </div>

    </Helmet>
    </div>
  )
}

export default Checkout