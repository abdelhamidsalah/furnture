import React from 'react'
import { Container } from 'react-bootstrap'
import './Common.css'
const Common = ({title}) => {
  return (
    <div className='common'>
    <Container>
    <h1>{title}</h1>
    </Container>
    </div>
  )
}

export default Common