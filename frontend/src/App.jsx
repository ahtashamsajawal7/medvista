import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import About from './components/About/About'
import Services from './components/Services/Services'
import Showcase from './components/Home/Showcase'
import Contact from './components/Contact/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import MedicineDisplay from './components/MedicineDisplay/MedicineDisplay'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()

  // Define paths where About and Contact should not be shown
  const hideAboutAndContact = ['/cart', '/order', '/shop', '/verify', '/myorders'].includes(location.pathname)

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/'

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        {/* Render Showcase and Services only on the homepage */}
        {isHomePage && (
          <>
            <Showcase />
            <About />
            {/* <Shop /> */}
            <Services />
          </>
        )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      {/* Conditionally render About and Contact */}
      {!hideAboutAndContact && (
        <>
          <Contact />
        </>
      )}
      <Footer />
    </>
  )
}

export default App
