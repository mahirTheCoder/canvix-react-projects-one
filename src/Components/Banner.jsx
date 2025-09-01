import React from 'react'
import overlyImg from '../assets/images/overlay.png'
const Banner = () => {
  return (
    <>
    
    <section id='Banner' className='bg-secondary pt-[102px] pb-[86px] relative'>
    <div style={{background:`url(${overlyImg})`, backgroundRepeat:'no-repeat' , backgroundPosition:'center', backgroundSize:'cover'}} className='w-full h-full absolute top-0 left-0 '></div>

    
    </section>
    
    </>
  )
}

export default Banner