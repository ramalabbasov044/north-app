import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/home/index'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Basket from './pages/basket/index'
import ProductDetail from './pages/productDetail/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App