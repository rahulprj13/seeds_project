import React from "react"
import "./assets/css/App.css"
import Footer from "./Component/Layout/Footer"
import { Header } from "./Component/Layout/Header"
import Approutes from "./Component/Routes/Approutes"
import CategoryContextProvider from "./Component/Context.jsx/CategoryContext"

function App() {

  return (
    <>
    
      <CategoryContextProvider>
          <Header/>
          <Approutes/>
          <Footer/>
      </CategoryContextProvider>
    </>
  )
}

export default App
