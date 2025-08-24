import React, { useState, createContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sams from './pages/Sams'
import Wishlist from './pages/Wishlist'
import MyOrders from './pages/MyOrders'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Publish from './pages/Publish'

// Create Wishlist Context
export const WishlistContext = createContext();

function App() {
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();

  const addToWishlist = (item) => {
    if (!wishlist.find((w) => w.name === item.name)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (item) => {
    setWishlist(wishlist.filter((w) => w.name !== item.name));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sams' element={<Sams />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/publish' element={<Publish />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        {/* Show Footer everywhere except Wishlist */}
        {location.pathname !== '/wishlist' && <Footer />}
      </div>
    </WishlistContext.Provider>
  )
}

export default App
