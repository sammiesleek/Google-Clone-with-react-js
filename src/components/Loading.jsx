import {Puff} from 'react-loader-spinner'
import { LineWave } from 'react-loader-spinner'
import React from 'react'

const Loading = () => {
  return (
    <div style={{justifyContent:'center', display:'flex',alignItems:'center'}}>
        <Puff type="puff" color="#00bfff" height={550} width={80}/>
        
    </div>
  )
}

export default Loading