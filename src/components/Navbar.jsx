import React from 'react'
import {Stack,Box,Card,Link,Avatar} from '@mui/material'
import Icon from '../asset/img/g.png';
import Search from './Search';

const Navbar = () => {
  return (
    <>
            <Box>
            <Stack sx={{justifyContentf:'center',  alignItems:'flex-end',padding:'10px 40px'}}>
               <Avatar>A</Avatar>
            </Stack>
            <Stack sx={{justifyContent:'center', alignItems:'center' ,marginTop:'30px'}}>
              <Link to="/">
                 <img src={Icon} alt="" style={{width:'300px'}} />
              </Link>
            </Stack>
        </Box> 
        <Search/>
    </>
  )
}

export default Navbar