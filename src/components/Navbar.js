import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector((state) => state.cart);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

      <span className='logo'><h3 style={{color: 'red'}}>STO<span style={{color: 'blue'}}>RE</span></h3></span>

      <div>
         <Link className='navLink ' to="/">Home</Link>
         <Link className='navLink' to="/">SignUp</Link>
         <Link className='navLink' to="/cart" >Cart</Link>

         <span className='cartCount'>
            Cart item: {items.length}
         </span>
      </div>

    </div>
  )
}

export default Navbar