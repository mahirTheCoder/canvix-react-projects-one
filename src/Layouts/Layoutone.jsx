import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Responsive from '../Components/Responsive'

const Layoutone = () => {
  return (
    <>
    <Navbar />
    <Responsive />
    <Outlet />
    </>
  )
}

export default Layoutone