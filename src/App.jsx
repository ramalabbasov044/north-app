import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/home/index'
import About from './pages/about/index'
import Contact from './pages/contact/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App