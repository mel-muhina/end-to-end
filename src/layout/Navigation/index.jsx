import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Navigation.css"

export default function Navigation() {
  return (
    <main>
      <header>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shows">Shows</NavLink>
              <NavLink to="/search">Search Shows</NavLink>
          </nav>
      </header>
      <Outlet />


    </main>
  )
}
