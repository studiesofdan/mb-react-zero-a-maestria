import React from 'react'
import { Link } from "react-router-dom"

import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/cat">Cat</Link>
    </nav>
  )
}

export default Navbar