import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <div className="container">
        <div className='navbar'>

        <div className="logo">
            <img src="https://www.watch24.bg/templates/watch24/images/designer/de0bdb30c64278be5192f8c99e7bc3c0_logo_black.png" alt="" />
        </div>

        <form className='search'>
            <input type="text" placeholder='Search....'/>
            <button>Search</button>
        </form>

        <button className='fav-btn'>Favorite</button>

        </div>
    </div>
  )
}

export default Navbar
