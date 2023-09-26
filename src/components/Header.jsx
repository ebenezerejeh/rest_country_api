import React from 'react'
import { useGlobalContext } from '../context'
import {FaMoon, FaSun} from 'react-icons/fa'

const Header = () => {
  const {handleToggle,toggleTheme} = useGlobalContext();
  return (
    <>

    <div className={ toggleTheme ? "title_heading_container" : "title_heading_container t_2"}>
                
                <div className="title_heading"><p>Where in the world?</p></div>
                
                
                        <div className="theme_switch_container">{ toggleTheme ?  <FaSun className='theme_logo_icon' /> : <FaMoon className='theme_logo_icon' />}<p className='theme_logo' onClick={handleToggle}>{ toggleTheme ? 'Light Mode': 'Dark Mode'}</p></div>


            </div>

    
    
    </>
  )
}

export default Header