import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './main.scss'
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"
import Header from "./components/Header"
import Container from "./components/Container"
import { DataProvider, FlatProvider } from "./utils/provider"
import Flat from "./pages/Flat"
import Error404 from "./pages/Error404"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <>
      <Container>
        <div className='appMainFlexbox'>
          <FlatProvider>
            <Router>
              <DataProvider>
                <Header />
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
                    <Route path="/about" element={<About />} errorElement={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
                    <Route
                      path="/flat/:flatId"
                      element={<Flat />}
                      errorElement={<Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />} />
                    <Route path="*" element={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
                  </Routes>
                </Layout>
              </DataProvider>
            </Router>
          </FlatProvider>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App