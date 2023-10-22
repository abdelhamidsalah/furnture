import React, { useEffect, useState } from 'react'

const Clock = () => {
  const[days , setDays] = useState()
  const[hours , setHours] = useState()
  const[minuts , setMinuts] = useState()
  const[Seconds , setSeconds] = useState()

  const countdown = () =>{
    const destination = new Date('oct 10 , 2024').getTime()

    let interval = setInterval(() => {
      const now = new Date().getTime()
      const diffrence = destination - now
      const days= Math.floor(diffrence / (1000 * 60 *60 *24))
      const hours= Math.floor(diffrence % (1000 * 60 *60 *24) /(1000*60*60))
      const minuts= Math.floor(diffrence % (1000 * 60 *60 *24) /(1000*60))
      const seconds= Math.floor(diffrence % (1000 * 60 *60 *24) /(1000))

      if(destination<0) clearInterval(interval.current)
      else{
    setDays(days)
    setHours(hours)
    setMinuts(minuts)
    setSeconds(seconds)
    }
    })
  }
  useEffect(() =>{
    countdown()
  })
  return (
    <div className='clo flex align-items-center gap-2'>
    <div className='clockdata flex align-items-center gap-3'>
    <div className='text-center'>
    <h1 className='text-white fs-6'>{days}</h1>
    <h5 className='text-white'>Days</h5>
    </div>
    <span className='text-white fs-[20px]'>:</span>
    </div>

    <div className='clockdata flex align-items-center gap-4'>
    <div className='text-center'>
    <h1 className='text-white fs-6'>{hours}</h1>
    <h5 className='text-white'>Hours</h5>
    </div>
    <span className='text-white fs-[20px]'>:</span>
    </div>

    <div className='clockdata flex align-items-center gap-4'>
    <div className='text-center'>
    <h1 className='text-white fs-6'>{minuts}</h1>
    <h5 className='text-white'>Minuts</h5>
    </div>
    <span className='text-white fs-[20px]'>:</span>
    </div>

    <div className='clockdata flex align-items-center gap-4'>
    <div className='text-center'>
    <h1 className='text-white fs-6'>{Seconds}</h1>
    <h5 className='text-white'>Seconds</h5>
    </div>
    
    </div>
    </div>
  )
}

export default Clock