import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

import {FaSearch} from 'react-icons/fa'

const SearchBox = () => {
  const { setSearchItem, toggleTheme } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(()=>{
    searchValue.current.focus();

  },[])

  const searchCountry = ()=>{
    setSearchItem(searchValue.current.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>

            <div className="search_container">
              <form className='input_form' onSubmit={handleSubmit}>

                <div className='search_bar_icon_container'>


                <FaSearch className='search_icon'/>
                
              <input type="text"  className={ toggleTheme ?  "search_bar" : "search_bar t_2"} 
                placeholder= "Search for a country..."  
                ref={searchValue}
                onChange={searchCountry}
                />
                
                </div>

                
                </form>


             </div>
    
    
    </>
  )
}

export default SearchBox