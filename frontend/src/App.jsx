import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
const App = () => {

 

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/success" element={<Success/> } />
        <Route path="/cancel" element={<Cancel/> } />
    </Routes>
  )
}

export default App