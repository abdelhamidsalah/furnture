import React , {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '../components/Helmet'
import Common from '../components/Common'
import './Shop.css'
import products from '../photos/ProductList'
import ProductLists from '../components/ProductLists'
const Shop = () => {
  const[pro , setPro] = useState(products)
  const handlesearch = e =>{
    const searchItem = e.target.value
    const searchpro = products.filter(item => item.productName.toLowerCase().includes(searchItem.toLowerCase()))
    setPro(searchpro)
  }
  const handlefilter = e =>{
    const filtervalue = e.target.value
    if(filtervalue ==='sofa'){
      const filterproduct = products.filter(item => item.category === 'sofa')
      setPro(filterproduct)
    }
    if(filtervalue ==='mobile'){
      const filterproduct = products.filter(item => item.category === 'mobile')
      setPro(filterproduct)
    }
    if(filtervalue ==='chair'){
      const filterproduct = products.filter(item => item.category === 'chair')
      setPro(filterproduct)
    }
    if(filtervalue ==='watch'){
      const filterproduct = products.filter(item => item.category === 'watch')
      setPro(filterproduct)
    }
  }
  return (
   
   <Helmet title='Shop'>
   <Common title='Products'/>
  <div className='shop'>
  <Container>
  <Row>
  <Col lg='3' md='4'>
  <div className='filter'>
  <select onChange={handlefilter}>
  <option >Filter By Category</option>
  <option value='sofa'>Sofa</option>
  <option value='mobile' >Mobile</option>
  <option value='chair' >Chair</option>
  <option value='watch'>Watch</option>
  </select>
  </div>
  </Col>

  <Col lg='3' md='4'>
  
  <div className='filter'>
  <select>
  <option className='op'>Sort By</option>
  <option value='ascending' className='op'>Ascending</option>
  <option value='descending' className='op'>Descending</option>
  </select>
  </div>
  </Col>
  <Col lg='3' md='4'>
  <div className='search'>
  <input type='text' placeholder='Search......' onChange={handlesearch}></input>
  <span>
  <i class="fa-solid fa-magnifying-glass"></i>
  </span>
  </div>
  </Col>
  </Row>
  </Container>
  
  <div>
  {
    pro.length === 0? <h1 className='text-center fs-4 pt-[30px]'>No products are found!</h1>
    : <ProductLists data={pro} />
  }
  </div>
  </div>
   </Helmet>

  )
}

export default Shop