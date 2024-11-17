import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:locationId" element={<Location />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
