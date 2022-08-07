import React from 'react'
import { Routes, Route , Redirect,Navigate} from 'react-router-dom'
import Results from './Results'


const Routesp = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Navigate to="/search"/> }/>
        <Route exact path='/video' element={<Results />} />
        <Route exact path='/news' element={<Results />} />
        <Route exact path='/image' element={<Results />} />
        <Route exact path='/search' element={<Results />} />

    </Routes>

    </>
  )
}

export default Routesp