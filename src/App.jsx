import PropsEg from './components/props.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
import Order from './components/Order.jsx'
import StateComp from './components/StateComp.jsx'
import UseEffect from './components/useEffect.jsx'
import UseEffectAPI from './components/UseEffectAPI.jsx'
import UseRef from './components/UseRef.jsx'
import UseMemo from './components/UseMemo.jsx'
import SignUp from './components/SignUp.jsx'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

var App = () => {
  var [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn))
  }, [isLoggedIn])

  return (
    <>
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/order"
          element={isLoggedIn ? <Order /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/use-state"
          element={isLoggedIn ? <StateComp /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/use-effect"
          element={isLoggedIn ? <UseEffect /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/use-effect-api"
          element={isLoggedIn ? <UseEffectAPI /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/use-ref"
          element={isLoggedIn ? <UseRef /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/use-memo"
          element={isLoggedIn ? <UseMemo /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
    <hr />
    </>
  )
}

export default App
