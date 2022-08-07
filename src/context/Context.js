import {createContext, useEffect,useState } from "react";

export const Context =createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1'

 export const ContextProvider=(props)=>{
     const [results, setresults] = useState([])
     const [isLoading, setisLoading] = useState(true)
     const [searchTerm, setsearchTerm] = useState('')

     const getResults= async(type)=>{
            setisLoading(true)
        const response = await fetch(`${baseUrl}${type}`,
        {
            method:'GET',
            headers:{
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'f85c73ee10msh5519d6ecc55872fp161f49jsn6de535ef7381',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        }
        
        )
        const data = await response.json()
         if(type.includes('/news')){
             setresults(data.entries)
         }else if(type.includes('/image')){
              setresults(data.image_results)
         }else{
              setresults(data.results)
         }
        // setresults(data)
        setisLoading(false)

     }


     return(
        
    <Context.Provider value={{results,isLoading,getResults,searchTerm,setsearchTerm}}>
      {props.children}
    </Context.Provider>
     )

 }






