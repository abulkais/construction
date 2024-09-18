import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='Not_found_page' >
        <img src="https://www.bricknbolt.com/assets/images/error_404.png"  alt="" />
        <h2 className='text-center'> Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to='/' className='btn  text-white' style={{ backgroundColor: '#f15a29' }}>Got to Home Page</Link>
      </div>
    </>
  )
}

export default NotFound