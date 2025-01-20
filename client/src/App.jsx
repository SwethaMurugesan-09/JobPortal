import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Application'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/applyjob/:id" element={<ApplyJob/>}/> 
      <Route path="/applications" element={<Applications/>}/> 
    </Routes>
    </div>
  )
}

export default App