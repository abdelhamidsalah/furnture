import React , {useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Helmet from '../components/Helmet'
import { Link , useNavigate } from 'react-router-dom'
import './Login.css'
import {auth} from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {toast} from 'react-toastify'

const Login = () => {
  const[email , setEmail] = useState()
  const[password , setPassword] = useState()
  const[loadin , setLoading] = useState(false)
  const navigate = useNavigate()
  const signIn = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const usercre = await signInWithEmailAndPassword(auth, email , password)
      const user = usercre.user
      console.log(user)
      setLoading(false)
      toast.success('successfully logged')
      navigate('/checkout')
    }
    catch(error){
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <div className='log'>
    <Helmet title='Login'>
    <div>
    <Container>
    <Row>
 {
  loadin? <Col lg='12' className='text-center'>
  <h5 className='fw-bold'>Loading....</h5>
  </Col> :   <Col lg='6' className='m-auto text-center'>
  <h3 className='fw-bold fs-4'>Login</h3>
  <form className='for' onSubmit={signIn}>
  <div>
  <input type='email' placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)}></input>
  </div>
  <br></br>
  <div>
  <input type='password' placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)}></input>
  </div>
  <button type='submit' className='login'>Login</button>
  <p>Don't have an account? <Link to='/signup' className='create'>Create an account</Link></p>
  </form>
  </Col>
 }
    </Row>
    </Container>
    </div>
    </Helmet>
    </div>
  )
}

export default Login