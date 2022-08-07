import React from 'react'
import { useContext } from "react";
import { useState,useEffect } from 'react';
import {useDebounce} from 'use-debounce'
import { Input,Box,TextField } from '@mui/material';
import { Divider } from '@mui/material';

import Links from './Links';
import { Context } from '../context/Context';


const Search = () => {
   const {results,isLoading,getResults,searchTerm,setsearchTerm} = useContext(Context);
     const [text,settext]=useState('')
     const [debounceValue] = useDebounce(text,3000)


     useEffect(() => {
       if(debounceValue) setsearchTerm(debounceValue)
  
      }, [debounceValue])
     
    
    
  return (
    <div style={{marginBottom:'10px'}}>

     <Box mt={2} sx={{padding:{xs:"0px 10px",md:"0px 15px", lg:"0px"}, display:'flex',justifyContent:"center",alignItems:"center"}} mb="40px" >
     <TextField value={text} onChange={(e)=>settext(e.target.value)}  sx={{width:{xs:"100%",lg:"500px"}, margin:"0px auto"}} />

     </Box>
      

      <Links/>
      <Divider sx={{marginTop:"20px"}}/>
    </div>
  )
}

export default Search