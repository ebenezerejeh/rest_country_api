import React from 'react'
import { useGlobalContext } from '../context';

const SingleCountryDetail = ({ countryNew}) => {
    const {toggleTheme} = useGlobalContext();
    
    const {name, 
        flags, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital, 
        topLevelDomain, 
        currencies, 
        languages, borders } = countryNew;

       
        
       
        

        


  return (
    <>

    <section className="main_section_country">

                    <div className="flag_container">

                       <img src={flags.png}/>
                    </div>


                    <div className="country_details_container">

                            <div className="country_detail_first">

                                                <div className="country_detail_upper">
                                                    <p className="figcaption_heading h2">{name}</p>
                                                    <p className="figcaption_body">Native Name: {nativeName}</p>
                                                    <p className="figcaption_body">Population: {population}</p>
                                                    <p className="figcaption_body">Region: {region}</p>
                                                    <p className="figcaption_body">Sub Region: {subregion}</p>
                                                    <p className="figcaption_body">Capital: {capital}</p>

                                                </div>
                                                
                                                <div className="country_detail_lower">
                                                    <p className="figcaption_body">Top Level Domain: {topLevelDomain}</p>
                                                    <p className="figcaption_body">Currencies: {currencies.map((item,id)=>{
                                                        return item.name
                                                    })}</p>
                                                    <p className="figcaption_body">Languages: {languages.map((item, id)=>{
                                                        return <span className='lang' key={id}>{item.name},</span>

                                                    })}</p>

                                                </div>


                            </div>

                        
                        <div className="country_detail_second">
                            <p className="border_header">Border Countries:</p>
                             {borders.map((name,index)=>{
                                 return <button key={index}  className={ toggleTheme ?  "btn btn2" : "btn btn2 t_2"}>{name}</button>
                            })}
                            
                            
                            

                        </div>




                    </div>



        </section>
    
    
    </>
  )
}

export default SingleCountryDetail