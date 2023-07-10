import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='dashboard' element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App