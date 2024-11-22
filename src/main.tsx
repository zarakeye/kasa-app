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


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
//       <Route path="/about" element={<About />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
//       <Route path="/flat/:flatId" element={<Flat />} errorElement={<Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />} />
//     </>
//   )
// )


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container >
      <div className='appMainFlexbox'>
        <Router>
          <Header />
          <Layout >
            <Routes>
              <Route path="/" element={<Home />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
              <Route path="/about" element={<About />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
              <Route path="/flat/:flatId" element={<Flat />} errorElement={<Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />} />
              <Route path="*" element={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
            </Routes>
          </Layout>
        </Router>
      </div>
      <Footer />
    </Container>
  </StrictMode>
)
