import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Router>
    </BrowserRouter>
    </>
  )
}

export default App
