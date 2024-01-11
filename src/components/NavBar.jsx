import React from 'react'

function NavBar() {
  return (
    <div>
             <nav className='container'>
        <div className="logo">
          <img src="/images/shoe-logo.png" alt="Nike Logo"  />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default NavBar