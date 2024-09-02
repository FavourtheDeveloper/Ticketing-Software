import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-around p-7'>
        <div className="img">
            <h1 className="text-6xl font-bold text-white text-center">KinVent</h1>
        </div>
        <div className="links">
            <ul className='inline-flex text-yellow-500 space-x-5 font-bold p-5 text-xl'>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/events"}><li>Events</li></Link>
                <Link to={"/tickets"}><li>My Tickets</li></Link>
                <Link to={"/contact"}><li>Contact Us</li></Link>
                <Button btnlink={"/signup"} btnText={"SignUp"} />
            </ul>
        </div>
    </div>
  )
}

export default Navbar