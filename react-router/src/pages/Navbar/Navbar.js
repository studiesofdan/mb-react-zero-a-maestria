import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      {/* Alternativa: className={({ isActive }) => (isActive ? "estaAtivo" : "naoAtivo")} */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/paises">Países</NavLink>
    </nav>
  )
}

export default Navbar