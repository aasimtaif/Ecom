import React from 'react'
import { Link } from 'react-router-dom'
import './ToggleCart.css'

function ToggleCart() {
  return (
    <div className='toggleCart'>
        <Link to='/cart' >Open Cart</Link>
    </div>
  )
}

export default ToggleCart