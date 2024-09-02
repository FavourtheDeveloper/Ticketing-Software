import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Event from './pages/Event'
import Events from './pages/Events'
import Ticket from './pages/Ticket'
const App = () => {
  return (
    <> 
    <Router>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/events' element={<Events />} />
    <Route path='/event' element={<Event />} />
    <Route path='/ticket' element={<Ticket />} />
    </Routes>
    </Router>
    </>
  )
}

export default App