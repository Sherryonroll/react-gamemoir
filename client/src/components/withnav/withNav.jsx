import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const testing = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default testing
