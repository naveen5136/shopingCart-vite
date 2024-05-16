import { Routes, Route } from "react-router"
import {Container} from 'react-bootstrap'
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  

  return (
    <ShoppingCartProvider>
    <Container>
      
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
      
    </Container>
    </ShoppingCartProvider>
  )
}

export default App

