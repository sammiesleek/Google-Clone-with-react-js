import React from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Links = () => {
  const Links =[
    {url:'/search', text:'All'},
    {url:'/news', text:'News'},
    {url:'/image', text:'Images'},
    {url:'/video', text:'Videos'},
  ]
  return (
    <Box sx={{marginLeft:{xs:"0",lg:"150px"}}} >
        {Links.map(({url,text},index)=>(
          <NavLink to={url} key={index} style={{marginRight:'40px'}}>
            {text}
          </NavLink>
        ))}
    </Box>
  )
}

export default Links