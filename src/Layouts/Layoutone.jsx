import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Responsive from '../Components/Responsive'
import Service from '../Components/Service'
import SingleserviceContent from '../Components/SingleserviceContent'

const Layoutone = () => {
  
  return (
    <>
    <Navbar />
    <Responsive />
    <Outlet />
    <Service/>
    </>
  )
}

export default Layoutone