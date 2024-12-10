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


/**
 * The root component of the app.
 *
 * It renders the following components:
 * - `Container` containing the `Header` and the routes
 * - `Footer`
 *
 * The routes are defined as follows:
 * - `/` shows the `Home` component
 * - `/about` shows the `About` component
 * - `/flat/:flatId` shows the `Flat` component with the given `flatId`
 * - `*` shows the `Error404` component with a default error message
 *
 * The component uses the `DataContextProvider` context to share the data between the components.
 *
 * The component uses the `Router` component to handle the client-side routing.
 */
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