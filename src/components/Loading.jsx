import React from 'react'
import {FaHourglassHalf} from 'react-icons/fa'

const Loading = () => {
  return (
    <div className='loader t_2_main' ><FaHourglassHalf className='loading'/><h1 className='loading_text'>Loading</h1></div>
  )
}

export default Loading