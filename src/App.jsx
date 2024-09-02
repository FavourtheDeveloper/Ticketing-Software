import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Event from './pages/Event'
const App = () => {
  return (
    <> 
    <Router>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/event' element={<Event />} />
    </Routes>
    </Router>
    </>
  )
}

export default App