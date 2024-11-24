import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
    </Routes>
  )
}

export default Main