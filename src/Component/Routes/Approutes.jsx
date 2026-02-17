import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Category from '../Pages/Category'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
import Search from '../Pages/Search'

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/products/:type/:item" element={<Products />} />
        <Route path="/product/:type/:item/:id" element={<ProductDetails />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </>
  )
}

export default Approutes