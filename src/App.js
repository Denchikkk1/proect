import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Services from './components/Services/Services.js';
import Contact from './components/Contact/Contact.js';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.js';
import TermsOfService from './components/TermsOfService/TermsOfService.js';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems([...cartItems, service]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div class="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/services"
              element={<Services onAddToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onRemoveFromCart={removeFromCart}
                  onClearCart={clearCart}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
