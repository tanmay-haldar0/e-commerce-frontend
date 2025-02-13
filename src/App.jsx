import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
