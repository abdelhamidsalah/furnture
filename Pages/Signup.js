import React , {useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Helmet from '../components/Helmet'
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {ref , uploadBytesResumable , getDownloadURL} from 'firebase/storage'
import { setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { auth } from '../Firebase';
import { Link } from 'react-router-dom'
import { storage } from '../Firebase';
import {toast} from 'react-toastify'
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Signup = () => {
  
  const[email , setEmail] = useState()
  const[password , setPassword] = useState()
  const[user , setUser] = useState()
  const[file , setFile] = useState()
  const [loadin , setLoading] = useState(false)
  const navigate = useNavigate()
  const signup = async(e)=>{
  e.preventDefault()
  setLoading(true)
  try{
   const usercre = await createUserWithEmailAndPassword(auth , email , password)
   const user =usercre.user
   const storageref = ref(storage , `images/${Date.now() + user}`)
   const uploadTask = uploadBytesResumable(storageref , file)
   
   uploadTask.on((error)=>{
    toast.error(error.message)
   }, ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
     await updateProfile(user , {
        displayName: user,
        photoURL: downloadURL
      })
      await setDoc(doc(db, 'users' , user.uid),{
        uid: user.uid,
        displayName:user,
        email,
        photoURL:downloadURL
      })
    })
   })

   setLoading(false)
   toast.success('account created')
   navigate('/login')
  }
  catch(error){
    setLoading(false)
    toast.error('somthing went wrong')
  }
  }


  return (
    <div className='log'>
    <Helmet title='Signip'>
    <div>
    <Container>
    <Row>
{
  loadin? <Col lg='12' className='text-center'>
  <h5 className='fw-bold'>Loading...</h5>
  </Col> :
  <Col lg='6' className='m-auto text-center'>
  <h3 className='fw-bold fs-4'>Signup</h3>
  <form className='for' onSubmit={signup}>
  <div>
  <input type='text' placeholder='UserName' value={user} onChange={e => setUser(e.target.value)}></input>
  </div>
  <br></br>
  <div>
  <input type='email' placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)}></input>
  </div>
  <br></br>
  <div>
  <input type='password' placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)}></input>
  </div>
  <br></br>
  <div>
  <input type='file'  onChange={e => setFile(e.target.files[0])}></input>
  </div>
  <button type='submit' className='login'>Create an account</button>
  <p>Already have an account? <Link to='/login' className='create'>Login</Link></p>
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

export default Signup