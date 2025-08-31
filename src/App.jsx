import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import Layoutone from './Layouts/Layoutone'
import Home from './Page/Home'
const App = () => {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layoutone />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App