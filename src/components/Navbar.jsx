import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='cont'>
      <Link to="/">Home</Link>
      <Link to="/add-book">Add Book</Link>
    </div>
  )
}

export default Navbar
