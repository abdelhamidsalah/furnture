import React from 'react'
import Helmet from '../components/Helmet'
import { Container , Row , Col } from 'react-bootstrap'
import Common from '../components/Common'
import './Cart.css'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/slices/CartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cardItems)
  return (
    <div>
    <Helmet title='Cart'>
    <Common title='Shopping Cart'/>
    <div className='cart'>
    <Container>
    <Row>
    <Col lg='9'>
 
   {cartItems.length === 0 ? (<h2>No item added to the cart</h2>) :
    (<table className='table'>
    <thead>
    <tr>
    <th>Image</th>
    <th>Title</th>
    <th>Price</th>
    <th>Qty</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {
      cartItems.map((item , index) => 
      (
       <TTT item={item} key={index}/>
      )
      )
    }
    </tbody>
    </table>)
  }
  
   
    </Col>
    <Col lg='3'>
    <div className='checkk'><Link to='/checkout' className='cc'>CheckOut</Link></div>
    </Col>
    </Row>
    </Container>
    </div>
    </Helmet>
    </div>
  )
}
const TTT = ({item}) => {
  const dispatch = useDispatch()
  const deleteproduct = () => {
    dispatch(
      cartActions.deleteItem(item.id)
    )
   
  
  }
  
return(

  <tr>
  <td>
  <img src={item.imgUrl} alt='ch'></img>
  </td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <td><i class="ri-delete-bin-6-line"
  onClick={deleteproduct}
  ></i></td>
  </tr>
)


};

export default Cart