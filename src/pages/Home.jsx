import React from 'react'
import Header from '../components/Header'
import FilterContainer from '../components/filterContainer'
import CountryList from '../components/countryList'
import { useGlobalContext } from '../context'

const Home = () => {

  const {toggleTheme} = useGlobalContext();
  return (
    <>

    <div className={ toggleTheme ? 'main_container'  : 'main_container t_2' }>

        <Header/>

        <FilterContainer/>

        <CountryList/>

            
    </div>
    
    
    </>
  )
}

export default Home