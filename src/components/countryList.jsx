import React from 'react'
import Country from './country'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CountryList = () => {
  
  const {country, loading,filteredItem, toggleTheme} = useGlobalContext();

  
  console.log(filteredItem)

  if(loading){
    return <Loading/>
  }

  if(filteredItem.length < 1){
   return <div  className={ toggleTheme ?  "no_result_section" : "no_result_section  t_2_main"}><h1>No Country Matched Your Search Criteria</h1></div> 

  }

  return (
    <>
    <section className="main_section ">
      {filteredItem.map((item, id)=>{
        return <Country key={id} {...item}/>


      })}

                
    </section>
  
    
    
    </>
  )
}


export default CountryList