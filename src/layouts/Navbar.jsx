import React, { useState } from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`?search=${search}`)
  }

  return (
    <div className="container">
        <div className='navbar'>

        <div className="logo">
            <img src="https://www.watch24.bg/templates/watch24/images/designer/de0bdb30c64278be5192f8c99e7bc3c0_logo_black.png" alt="" />
        </div>

        <form className='search' onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder='Search....'/>
            <button>Search</button>
        </form>

        <button className='fav-btn'>Favorite</button>

        </div>
    </div>
  )
}

export default Navbar
