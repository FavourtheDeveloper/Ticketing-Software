import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btnText, btnlink}) => {
  return (
    <div>
        <Link to={btnlink}><span className='bg-blue-900 text-white p-3 rounded-xl hover:bg-white hover:text-yellow-500'>{btnText}</span></Link>
    </div>
  )
}

export default Button