import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Nav = () => {
  return (
      <nav className='navbar'>
          <div className='navbar-left'>
              <Link to={'/'} className='navbar-brand'>FundApp</Link>
          </div>
          <div className='navbar-right'>
              <Link to={'/news'} className='navbar-link'>News</Link>
              <Link to={'/login'} className='navbar-link'>Login</Link>
          </div>
      </nav>
  )
}

export default Nav