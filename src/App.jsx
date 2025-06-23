import React from 'react'
import Home from './pages/home/Home.jsx'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/Products.jsx'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
