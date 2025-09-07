import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Responsive from '../Components/Responsive'
import Service from '../Components/Service'
import SingleserviceContent from '../Components/SingleserviceContent'
import Footer from '../Components/Footer'

const Layoutone = () => {
  
  return (
    <>
    <Navbar />
    <Responsive />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layoutone