import { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import Cart from './components/Cart'
import Contact from './components/Contact'

const App = () => {
  const [cart , setCart] = useState([])
  return (
    <div>
      <BrowserRouter>
      <Header cart={cart} />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Collection" element={<Collection cart ={cart} setCart ={setCart} />}></Route>
          <Route path="/Cart" element={<Cart cart ={cart} setCart ={setCart}/>}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>     
      </BrowserRouter>
    </div>
  )
}

export default App
