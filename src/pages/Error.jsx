import React from 'react'
import { Link } from 'react-router-dom'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'

const Error = () => {
  return (
    <>
    <Link to='/' ><div className="error_btn">< FaLongArrowAltLeft className='theme_logo_icon'/><p className='theme_logo'>Home</p></div></Link>   
    <div className='error_page'><FaTools className='error_icon'/><h1>404 : SORRY!!! PAGE NOT FOUND</h1></div>
    </>
  )
}

export default Error