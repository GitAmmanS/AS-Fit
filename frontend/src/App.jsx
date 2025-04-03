import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Product from './pages/Product'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import AdminShowSomeTime from './utils/AdminShowSomeTime'

const App = () => {
  return ( 
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:[9-vw]'>
       <AdminShowSomeTime>
      <NavBar/>
      </AdminShowSomeTime>

      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      
      <AdminShowSomeTime>
      <Footer/>
      </AdminShowSomeTime>
      </div>
  )
}

export default App