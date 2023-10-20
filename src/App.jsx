
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {


  return (
    
      <div className='App'>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home /> }
            />
          </Routes>
        </div>
       </Router>
      </div>
  
  )
}

export default App
