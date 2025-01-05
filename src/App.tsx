import React from "react"
import { AppContext } from "./AppContext"
import Home from "./pages/Home"
import Playground from "./pages/Playground"
import Result from "./pages/Result"
import "./styles.css"
function App() {
  const { state } = React.useContext(AppContext)
  return (
    <>
      {state?.currentPage == "home" ? <Home /> : ''}
      {state?.currentPage == "game" || state?.currentPage == "end" ? <Playground /> : ''}
      {state?.currentPage == "end" ? <Result /> : ''}
    </>
  )
}

export default App
