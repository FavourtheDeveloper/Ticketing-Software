import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Tickets = () => {
  return (
    <div>
        <Navbar />
        <div className=' text-center text-yellow-500  p-36'>
            <h1 className='text-5xl text-blue-500'>Oops! You have no Tickets yet</h1> <br />
            <Link to={'/'}><p>Back to Home</p></Link>
        </div>
        <Footer />
    </div>
  )
}

export default Tickets