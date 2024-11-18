import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'

import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Error404 from './pages/Error404'
import Container from './components/Container'
import Footer from './components/Footer'
import Layout from './components/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Container >
        <Layout >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location/:locationId" element={<Location />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
        <Footer />
      </Container>
    </Router>
  </StrictMode>,
)
