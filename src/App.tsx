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

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root component of the app.
 * 
 * It renders a Router with a Header and a Footer, and a Container
 * that contains the main content of the app.
 * 
 * The main content is rendered using the Routes component, which
 * renders a different component based on the current route.
 * 
 * The routes are:
 * - "/" : Home
 * - "/about" : About
 * - "/flat/:flatId" : Flat
 * - "*" : Error404
 * 
 * The Error404 component is rendered with a custom message depending
 * on the route that was not found.
 * 
 * The DataContextProvider is used to provide the data to the whole app.
 * 
 * The app is wrapped in a main flexbox container to center it vertically.
 * 
 * @returns {JSX.Element} The root component of the app.
 */
/******  59a24188-4d9a-453a-882b-a49c3f055fbb  *******/
const App: React.FC = () => {
  return (
    <>
      <div className={style.appMainFlexbox}>
        <DataContextProvider>
          <Router>
            <DataContextProvider>
              <Container>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/flat/:flatId" element={<Flat />} />
                  <Route path="*" element={<Error404 message="Oups ! La page que vous demandez n'existe pas" />} />
                </Routes>
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