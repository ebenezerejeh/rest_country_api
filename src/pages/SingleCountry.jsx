import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import SingleCountryDetail from '../components/singleCountryDetail'
import { useParams, Link } from 'react-router-dom'
import data from '../data.json'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Error from './Error'
import { useGlobalContext } from '../context'





const SingleCountry = () => {

  const { name } = useParams();
  // console.log(name);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(data);
  const {toggleTheme} = useGlobalContext();
  

  const countryNew = country.find((item)=>{
     return item.name.toLowerCase() === name.toLowerCase();
  
  })

  
  

  
  const borderCountry= ()=>{

    if (countryNew===undefined){
      return;
    };
    
    if ('borders' in countryNew) {
      // console.log('borders')
     }else{
     countryNew.borders = ['No Border Countries'];
      // console.log(countryNew.borders)

     }; 


      if ('currencies' in countryNew){
        // console.log('currencies')
      }else {
        countryNew.currencies = [{'name':'No Currency'}];
      }
      if ('capital' in countryNew){
        // console.log('capital')
      }else {
        countryNew.capital ='No Capital';
      };
      
      
       return countryNew;

             

               
  }
  
  borderCountry();
  // useEffect(()=>{
    

  // },[])

  if(countryNew===undefined){
    return <Error/>
  }else{

    return (
    <>
    <div className={ toggleTheme ? "main_container_country" : "main_container_country  t_2_main"}>

        <Header/>

        <Link to='/' ><div className={ toggleTheme ? "nav_button" : "nav_button t_2"}>< FaLongArrowAltLeft className='theme_logo_icon'/><p className='theme_logo'>Back</p></div></Link>   

        <SingleCountryDetail countryNew={countryNew}/>
                
        


    </div>
    
    
    
    </>
  )


  }
    
  
  
}

export default SingleCountry