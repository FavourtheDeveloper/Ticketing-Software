import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Event from './pages/Event'
import Events from './pages/Events'
import Ticket from './pages/Ticket'
import Error from './pages/Error'
import Generate from './pages/Generate'
import Tickets from './pages/Tickets'
const App = () => {
  return (
    <> 
    <Router>
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<Error />} />
    <Route path='/events' element={<Events />} />
    <Route path='/tickets' element={<Tickets />} />
    <Route path='/event/:id' element={<Event />} />
    <Route path='/ticket/:id' element={<Ticket />} />
    <Route path='/generate/:name' element={<Generate />} />
    </Routes>
    </Router>
    </>
  )
}

export default App