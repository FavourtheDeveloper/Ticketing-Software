import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <Navbar />
        <div className=' text-center text-yellow-500  p-36'>
            <h1 className='text-5xl text-red-500'>Oops! This is an error page</h1> <br />
            <Link to={'/'}><p>Back to Home</p></Link>
        </div>
        <Footer />
    </div>
  )
}

export default Error