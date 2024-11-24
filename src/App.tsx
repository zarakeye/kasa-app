import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Container from "./components/Container"
import { DataContextProvider } from "./utils/provider"
import Flat from "./pages/Flat"
import Error404 from "./pages/Error404"
import Footer from "./components/Footer"
import style from './App.module.scss'
import Layout from "./components/Layout"

const App: React.FC = () => {
  return (
    <>
        <div className={style.appMainFlexbox}>
          <DataContextProvider>
            <Router>
              <DataContextProvider>
                <Container>
                    <Layout>
                      <Header />
                    </Layout>
                    <Layout>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                          path="/flat/:flatId"
                          element={<Flat />}
                          errorElement={<Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />} />
                        <Route path="*" element={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
                      </Routes>
                    </Layout>
                </Container>
                <Footer />
              </DataContextProvider>
            </Router>
          </DataContextProvider>
        </div>
    </>
  )
}

export default App