import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Mapping from './pages/mapping/mapping'
import Home from './pages/home/home'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mapping" element={<Mapping/>} />
      </Routes>
    </Router>
  )
}

export default App;
