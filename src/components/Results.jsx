import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import Loading from './Loading'
import { Context } from '../context/Context';
import { Box,Stack,Typography,Grid ,Card,CardMedia,CardContent,CardActionArea} from '@mui/material'
 

const Results = () => {
    const Location=useLocation()
    const {results,isLoading,getResults,searchTerm} = useContext(Context);
    // console.log(results)
    useEffect(() => {



        if(searchTerm){
            if(Location.pathname === '/videos'){

                getResults(`${Location.pathname}/q=${searchTerm} videos`)
            }else{
                getResults(`${Location.pathname}/q=${searchTerm}`)

            }
            
        }
   
     
    }, [Location.pathname,searchTerm])
    

    
    if(isLoading && searchTerm) return <Loading/>

    switch (Location.pathname) {
        case '/search':
            return(
                <Grid container spacing={4} sx={{margin:'0px auto' ,width:{md:'80%'}}} >
                    {results?.map(({link,title},index)=>(
                        <Grid item xs={12} md={6}  key={index} >
                            <a href={link} target="_blank" rel='noreferrer'>

                                <Typography variant='p' color="black">
                                    {link.length >30 ? link.substring(0,30) : link}
                                </Typography>
                                <Typography variant='h6'>
                                    {title}
                                </Typography>

                             </a>
                        </Grid>
                    ))}
                </Grid>
            );
        case '/image':
            return (
                <Grid container  spacing={2}>
                    {results?.map(({image,link:{href,title}},index)=>(
                        
                        <Grid item xs={12} md={6} lg={4}  key={index}>

                            <a href={href}>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia   width="200px" component='img' image={image?.src} />

                                   
                                   <CardContent>
                                    
                                    <Typography variant="body2" color="text.secondary">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {href?.length > 30 ? href?.substring(0,30): href }
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>

                        </Grid>
                    ))}
                </Grid>
            )
        case '/video':
            return (
                <Grid container spacing={2}>
                    {results?.map((video,index)=>(
                         <Grid item xs={12} md={6} lg={4}  key={index}>


                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                   
                                        <ReactPlayer url={video?.link} controls width="100%"/>
                                   
                                   <CardContent>
                                   
                                        <Typography>
                                            {video?.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            )
        case '/news':
            return (
                 <Grid container spacing={4} sx={{margin:'0px auto' ,width:{md:'80%'}}} >
                    {results?.map(({link,title},index)=>(
                        <Grid item xs={12} md={6}  key={index} >
                            <a href={link} target="_blank" rel='noreferrer'>

                                <Typography variant='h6'>
                                    {title}
                                </Typography>
                                <Typography variant='p' color="black">
                                    {link.length >30 ? link.substring(0,30) : link}
                                </Typography>

                             </a>
                        </Grid>
                    ))}
                </Grid>
            )
            
        default:
            break;
    }
    
}

export default Results