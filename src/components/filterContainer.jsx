import React from 'react'
import SearchBox from './searchBox'
import Dropdown from './dropdown'

const FilterContainer = () => {
  return (
    <>
        <div className="search_filter_container">

            <SearchBox/>

            <Dropdown/>    

        </div>

    
    </>
  )
}

export default FilterContainer