import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.scss'

import Home from './pages/Home'
import About from './pages/About'
import Flat from './pages/Flat'
import Error404 from './pages/Error404'
import Container from './components/Container'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Header from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Container >
        <div className='appMainFlexbox'>
          <Header />
          <Layout >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/flat/:flatId" element={<Flat />} />
              <Route path="*" element={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
            </Routes>
          </Layout>
        </div>
        <Footer />
      </Container>
    </Router>
  </StrictMode>,
)
