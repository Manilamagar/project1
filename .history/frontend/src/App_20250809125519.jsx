import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import React from "react"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
