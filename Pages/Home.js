import React , {useEffect , useState} from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import Helmet from '../components/Helmet'
import './Home.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Services from '../components/Services'
import ProductLists from '../components/ProductLists'
import products from '../photos/ProductList'
import Clock from '../components/Clock'
const Home = () => {
  const year =new Date().getFullYear()
  const [data , setData] = useState(products)
  const [best , setBest] = useState(products)
  const [arr , setArr] = useState(products)
  const [watch , setWatch] = useState(products)
  useEffect(() =>{
    const filteredProduct = products.filter((item) => item.category === 'chair')
    const filteredbestProduct = products.filter((item) => item.category === 'sofa')
    const filteredarrProduct = products.filter((item) => item.category === 'mobile')
    const filteredwatchProduct = products.filter((item) => item.category === 'watch')
    setData(filteredProduct)
    setBest(filteredbestProduct)
    setArr(filteredarrProduct)
    setWatch(filteredwatchProduct)
  } , [])
  return (
    <Helmet title={'Home'}>
    <div className='section'>
     <Container>
     <Row>
     <Col lg='6' md='6'>
     <div className='content'>
     <p>Trending Product in {year}</p>
     <h2>Make Your Interior More Minimalistic & Modern</h2>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when 
      
     </p>
     <motion.button whileTap={{scale:1.2}} className='btn'>
     <Link to='/shop' className='lin'>Shop Now</Link>
     </motion.button>
     </div>
     </Col>
     <Col lg='6' md='6'>
     <img src={require('../photos/hero-img.png')} alt='i' className='iimm'></img>
     </Col>
     </Row>
     </Container>

    </div>
    <Services/>
    <div className='trend'>
    <Container>
    <Row>
    <Col lg='12'>
    <h2>Trending Products</h2>
    </Col>
    <ProductLists data={data}/>
    </Row>
    </Container>
    </div>
    
    <div className='best'>
    <Container>
    <Row>
    <Col lg='12'>
    <h2>Best Sales</h2>
    </Col>
    <ProductLists data={best} />
    </Row>
    </Container>
    </div>

    <div className='clock'>
    <Container>
    <Row>
    <Col lg='6' md='6' >
   <div className='co1'>
   <div className='counter mb-[20px]'>
   <h4>Limited Offers</h4>
   <h3>Quality Armchair</h3>
   </div>
   <Clock/>
   <motion.button whileTap={{scale:1.2}}>
   <Link to='/shop' className='btnn'>Visit Store</Link>
   </motion.button>
   </div>
    </Col>
    <Col lg='6' md='6' >
    <img src={require('../photos/counter-timer-img.png')} alt='pho'></img>
    </Col>
    </Row>
    </Container>
    </div>

    <div className='arrival'>
    <Container>
    <Row>
    <Col lg='12'>
    <h2>New Arrivals</h2>
  
    </Col>
   
    <div>
    <ProductLists data={arr}/>
    
    </div>

    </Row>
    </Container>
    </div>

    <div className='watches'>
    <Container>
    <Row>
    <Col lg='12'>
    <h2>Popular Category</h2>
    </Col>
    <ProductLists data={watch} />
    </Row>
    </Container>
    </div>
    </Helmet>
  )
}

export default Home