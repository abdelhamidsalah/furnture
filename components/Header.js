import React , {useRef , useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import {motion} from 'framer-motion'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
const Header = () => {
  const totalQuantity =useSelector(state => state.cart.totalQuantity)

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const stickyHeader = ()=>{
    window.addEventListener('scroll' , ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky')
      }
      else{
        headerRef.current.classList.remove('sticky')
      }
    })
  }
  useEffect(() =>{
      stickyHeader()
     
  } , [])
  const menutoggle = () => menuRef.current.classList.toggle('active_menu')
  const navigateTocart =() =>{
    navigate('/cart')
  }
  return (
    <header className='header'  ref={headerRef}>
    <Container>
    <Row>
    <div className='nnaavv'>

    <div className='logo'>
    <img src={require('../photos/eco-logo.png')} alt='logo'></img>
    <div>
    <h2>Multimart</h2>
    </div>
    </div>

    <div className='navss' ref={menuRef} onClick={menutoggle}>
    <ul className='menu'>
    <li>
    <NavLink to='/' className='nav'>Home</NavLink>
    </li>
    <li>
    <NavLink to='/shop' className='nav'>Shop</NavLink>
    </li>
    <li>
    <NavLink to='/cart' className='nav'>Cart</NavLink>
    </li>
    </ul>
    </div>

    <div className='icons'>
    <span className='heart'><i class="ri-heart-line"></i>
    <span className='num1'>1</span>
    </span>
    
    <span className='bag'><i class="ri-shopping-bag-line" onClick={navigateTocart}></i>
    <span className='num2'>{totalQuantity}</span>
    </span>
    
    <span>
    <motion.img whileTap={{scale: 1.2}} src={require('../photos/user-icon.png')} alt='img'></motion.img>
    </span>
    
    <div className='mobilemenu'  >
    <span  onClick={menutoggle}><i class="fa-solid fa-bars"  ></i></span>
    </div>
    </div>


    </div>
    </Row>
    </Container>
    </header>
  )
}

export default Header