import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import data from './data.json'

const allRegions = ['All',...new Set(
  data.map((item)=>{
    return item.region
  })

)]


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');
  const [country,setCountry] = useState(data);
  const [filteredItem, setFilteredItem] = useState([]);
  const [regions, setRegions] = useState(allRegions);
  const [toggleTheme, setToggleTheme] = useState(false);
  

  // const fetchCountries = async ()=>{
  //   try {
  //     const response = await fetch(`${url}${searchItem}`);
  //     const data = await response.json();
  //     console.log(data);
      
  //   } catch (error) {
  //     console.log(error);
  
  //   }
  
  // }
  
  // fetchCountries();

  // console.log(country.filter((item)=>{
  //   return item.name.toLowerCase().startsWith(searchItem);
  // }));

  const handleToggle = ()=>{
    if(toggleTheme){
      setToggleTheme(false);
    }else{
      setToggleTheme(true)
    }

  };


  useEffect(()=>{
    
    let dataSecond = country.filter((item)=>{
      if (searchItem===''){
        return item;
      }else{
        return item.name.toLowerCase().startsWith(searchItem.toLowerCase());
        }
        
    });
    if(dataSecond){
      setFilteredItem(dataSecond)
    setLoading(false);
  }else if(dataSecond===""){
    setFilteredItem([])
    setLoading(true);
    
  }

  

  
},[searchItem])





  const filterRegion = (region)=>{
    
    if(region === 'All'){
      setFilteredItem(country);
      return;
    }
    const newRegion = country.filter((item)=>{
      return item.region===region
    })
    
    console.log(newRegion)
    return setFilteredItem(newRegion)
    
  }

  

  return (
    <AppContext.Provider
    value={{
      loading, 
      searchItem, 
      country, 
      setSearchItem,
      filteredItem,
      setFilteredItem,
      filterRegion,
      regions,
      toggleTheme,
      handleToggle
      }}>
      
      {children}

    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}



export { AppContext, AppProvider }



// endpoint https://restcountries.com/v3.1/name/{name}

// const url = 'https://restcountries.com/v3.1/name/';