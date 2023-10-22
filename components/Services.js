import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import {motion} from 'framer-motion'
import './Service.css'
import ServiceData from '../photos/ServiceData'
const Services = () => {
  return (
    <div className='service'>
    <Container>
    <Row>
    {
        ServiceData.map((item , index) => (
         <Col lg='3' md='4' key={index}>
         <motion.div whileHover={{ scale:1.1}} className='service'
         style={{background:`${item.bg}`}}
         >
         <div className='item'>
         <span>
         <i className={item.icon}></i>
         </span>
         <div className='tit'>
         <h3>{item.title}</h3>
         <p>{item.subtitle}</p>
         </div>
         </div>
         </motion.div>
         </Col>
        ))
    }
    </Row>
    </Container>
    </div>
  )
}

export default Services