import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import React from "react"
import Home from "./Pages/Home/Home"
import Login from "./authentication/login"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<div>About Page</div>} />
      <Route path='/login' element={<Login}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
