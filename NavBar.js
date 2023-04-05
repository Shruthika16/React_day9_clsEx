import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Layout} from './Layout'
import Home from './Home'
import Singers from './Singers'
import Albums from './Albums'

function NavBar() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path='Albums' element={<Albums/>}/>
        <Route path='Singers' element={<Singers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar