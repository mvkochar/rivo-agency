import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Blog, Career, Home, Privacy, Projects } from '../pages'

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
      <Route
        path='privacy'
        element={<Privacy/>}
      />        
    </Routes>
  )
}

export default Main