import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Blog, Career, Contact, ExpertiseHealthcare, Home, Privacy, Project, Projects } from '../pages'

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
        element={<Blog />}
      />
      <Route
        path='privacy'
        element={<Privacy />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='project/:id'
        element={<Project />}
      />
      <Route
        path='expertise-healthcare'
        element={<ExpertiseHealthcare/>}
      />
    </Routes>
  )
}

export default Main