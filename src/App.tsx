import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem: CartItem = {
      ...item,
      id: Date.now().toString(),
    };
    setCart([...cart, newItem]);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop addToCart={addToCart} setCurrentPage={setCurrentPage} />;
      case 'learn':
        return <Learn />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'checkout':
        return <Checkout cart={cart} setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <p>FREE SHIPPING on orders over $50</p>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img src="/newLogo.png" alt="Grounds to Grow" className="logo-img" />
          </div>
          
          <nav className="nav">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shop'); }}>Shop</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('learn'); }}>Learn</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button 
              className="icon-btn cart-btn" 
              aria-label="Cart"
              onClick={() => setCurrentPage('checkout')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Grounds to Grow</h4>
              <p>Cultivating sustainable change, one coffee ground at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shop'); }}>Shop</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('learn'); }}>Learn</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="https://www.epa.gov/recycle/composting-home" target="_blank" rel="noopener">EPA Composting Guide</a></li>
                <li><a href="https://bioenterprise.ca" target="_blank" rel="noopener">Coffee Waste Stats</a></li>
                <li><a href="mailto:info@groundstogrow.com">info@groundstogrow.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Grounds to Grow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
