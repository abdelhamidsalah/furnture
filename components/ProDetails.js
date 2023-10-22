import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import products from '../photos/ProductList'
import Helmet from './Helmet'
import Common from './Common'
import { motion} from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import ProductLists from './ProductLists'
import './Prodetails.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/slices/CartSlice'
import {  toast } from 'react-toastify';

const ProDetails = ({item}) => {



  const [tap , setTap] = useState('desc')
  const [rat , setRat] = useState(null)
    const {id} = useParams()
    const product = products.find(item => item.id === id)
    const {imgUrl, productName ,price , avgRating , shortDesc , description , reviews , category} = product
   const allpro = products.filter(item => item.category === category)

   const dispatch = useDispatch()
   const addTocart = () => {
     dispatch(
       cartActions.addItem({
       })
     )
     toast.success('product added successfully')
   }
  return (
    <Helmet >
    <Common title={productName}/>
    <div className='prodet'>
    <Container>
    <Row>
    <Col lg='6'>
    <img src={imgUrl} alt='' ></img>
    </Col>
    <Col lg='6'>
    <div className='details'>
    <h2>{productName}</h2>
    <div className='rating'>
    <span>
    <i class="ri-star-fill"></i>
    </span>
    <span>
    <i class="ri-star-fill"></i>
    </span>
    <span>
    <i class="ri-star-fill"></i>
    </span>
    <span>
    <i class="ri-star-fill"></i>
    </span>
    <span>
    <i class="ri-star-half-line"></i>
    </span>
    </div>
    <p>({avgRating}ratings)</p>
    </div>
    <div className='flex align-items-center gap-3'>
    <span className='price'>${price}</span>
    <span>Category : {category}</span>
    </div>
    <p className='des'>{shortDesc}</p>
    <motion.button whileTap={{scale:1.2}} className='bbttnn' onClick={addTocart}>Add to cart</motion.button>
    </Col>
    </Row>
    </Container>
    </div>

    <div className='review'>
    <Container>
    <Row>
    <Col lg='12'>
    <div className='rev flex align-items-center gap-5'>
    <h6 onClick={() => setTap('desc')}>Description</h6>
    <h6 onClick={() => setTap('revi')}>Reviews ({reviews.length})</h6>
    </div>
   
    {
      tap === 'desc' ? 
        <div className='description mt-[15px]'>
        <p>{description}</p>
        </div> : (
          <div className='revi mt-[20px]'>
          <ul>
          {
            reviews.map((item , index) =>(
              <li key={index} className='mb-4'>
              <h6>John Doe</h6>
              <span>{item.rating} (avarage rating)</span>
              <p>{item.text}</p></li>
            )
            )
          }
          </ul>

          <div className='form'>
          <h4>Leave Your experience</h4>
          <form action=''>
          <div className='form1'>
          <input type='text' placeholder='Enter Name'></input>
          </div>
          <div className='stars flex align-items-center gap-5'>
          <span>1 <i class="ri-star-fill" onClick={() => setRat(1)}></i></span>
          <span>2 <i class="ri-star-fill" onClick={() => setRat(2)}></i></span>
          <span>3 <i class="ri-star-fill" onClick={() => setRat(3)}></i></span>
          <span>4 <i class="ri-star-fill" onClick={() => setRat(4)}></i></span>
          <span>5 <i class="ri-star-fill" onClick={() => setRat(5)}></i></span>
          </div>
          <div className='form2'>
          <textarea rows={4} type='text' placeholder='Review Message'></textarea>
          </div>
          <button type='submit' className='submit'>Submit</button>
          </form>
           
          </div>
          </div>
        )
      
    }
    </Col>

    <Col lg='12'>
    <h2>You might also like</h2>
    </Col>
    <ProductLists data={allpro}/>
    </Row>
    </Container>
    </div>
    </Helmet>
  )
}

export default ProDetails