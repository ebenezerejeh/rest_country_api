import React from 'react'
import { useGlobalContext } from '../context'

const Dropdown = () => {

  const {filterRegion, regions, toggleTheme} = useGlobalContext();
  
  
  return (
    <>

        <div className="filter_category_container">
            
            <div className={ toggleTheme ? "drop_down" : "drop_down  t_2"}>
                <p>Filter by Region</p>

                <div className={ toggleTheme ?  "drop_down_content" : "drop_down_content t_2"}>
                  {regions.map((region, index)=>{

                   return <p key={index} onClick={()=>filterRegion(region)}>{region}</p>

                    
                  })}
                  
                    

                </div>
            </div>


        </div>
    
    
    </>
  )
}

export default Dropdown