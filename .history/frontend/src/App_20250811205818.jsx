import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import React from "react"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<div>About Page</div>} />
      <Route path='/login' element=
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
