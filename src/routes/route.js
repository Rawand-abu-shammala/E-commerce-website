import React from 'react'
import {Routes, Route} from 'react-router'
import Home from '../components/home/Home'

const route = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default route