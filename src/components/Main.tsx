import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Blog, Career, Home, Projects } from '../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='projects'
        element={<Projects />}
      />
      <Route
        path='career'
        element={<Career />}
      />
      <Route 
        path='blog'
        element={<Blog/>}
      />        
    </Routes>
  )
}

export default Main