import React from 'react'
import { Link } from 'react-router-dom'
import {FaInfoCircle} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Country = ({  flags, name, population, region, capital }) => {

  const {toggleTheme} = useGlobalContext();
  return (
    <>
      <figure className={ toggleTheme ? "fig_class" : "fig_class t_2"} >

                  <div className="fig_img"><img className="fig_image" src={flags.png}/></div>

                    <figcaption className={ toggleTheme ?  "fig_caption_body" : "fig_caption_body t_2"}>

                        <p className="figcaption_heading">{name}</p>                        
                        <p className="figcaption_body">Population: {population}</p>                        
                        <p className="figcaption_body">Region: {region}</p>                        
                        <p className="figcaption_body">Capital: {capital}</p> 
                        <Link to={`/singleCountry/${name}`} className='link_att'><FaInfoCircle className='more_info'/></Link>
                        



                    </figcaption >

                   

                </figure>

                
    
    
    </>
  )
}

export default Country