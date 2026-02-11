import { useState } from 'react';
import './Shop.css';

interface ShopProps {
  addToCart: (item: { name: string; price: number; quantity: number; image: string }) => void;
  setCurrentPage: (page: string) => void;
}

function Shop({ addToCart, setCurrentPage }: ShopProps) {
  const [selectedImage, setSelectedImage] = useState('front');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      name: 'Grounds to Grow Premium Vermicompost',
      price: 10.00,
      quantity: quantity,
      image: '/front of coffee bag.png'
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setCurrentPage('checkout');
  };

  return (
    <div className="shop-page">
      <section className="section product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img 
                  src={selectedImage === 'front' ? '/front of coffee bag.png' : '/backofcoffee bag.png'} 
                  alt="Grounds to Grow Coffee Compost" 
                />
              </div>
              <div className="image-thumbnails">
                <button 
                  className={`thumbnail ${selectedImage === 'front' ? 'active' : ''}`}
                  onClick={() => setSelectedImage('front')}
                >
                  <img src="/front of coffee bag.png" alt="Front of package" />
                </button>
                <button 
                  className={`thumbnail ${selectedImage === 'back' ? 'active' : ''}`}
                  onClick={() => setSelectedImage('back')}
                >
                  <img src="/backofcoffee bag.png" alt="Back of package" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">Grounds to Grow Premium Vermicompost</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
              </div>
              
              <div className="product-price-section">
                <span className="current-price">$10.00</span>
              </div>

              <div className="product-description">
                <p>
                  Transform your garden with our premium vermicompost made from locally sourced coffee grounds. 
                  This pet-safe, nutrient-rich soil amendment is perfect for urban gardeners and balcony plant enthusiasts.
                </p>
                <ul className="product-features">
                  <li>✓ Caffeine removed through vermicomposting</li>
                  <li>✓ Safe for pets and children</li>
                  <li>✓ Improves soil structure and water retention</li>
                  <li>✓ Contains beneficial microorganisms</li>
                  <li>✓ Eco-friendly biodegradable packaging</li>
                </ul>
              </div>

              <div className="product-specs">
                <div className="spec-item">
                  <strong>Size:</strong> 1 pod (30g)
                </div>
                <div className="spec-item">
                  <strong>Covers:</strong> 1-2 pots (10-12 inches)
                </div>
                <div className="spec-item">
                  <strong>Frequency:</strong> Apply every 6-8 weeks
                </div>
                <div className="spec-item">
                  <strong>Shipping:</strong> Free on orders over $50
                </div>
              </div>

              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button 
                    className="qty-btn" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    id="quantity"
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="quantity-input"
                  />
                  <button 
                    className="qty-btn" 
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary btn-large" onClick={handleAddToCart}>Add to Cart</button>
                <button className="btn btn-secondary btn-large" onClick={handleBuyNow}>Buy Now</button>
              </div>

              <div className="shipping-info">
                <p>🚚 <strong>Free shipping</strong> on orders over $50</p>
                <p>📦 Usually ships within 2-3 business days</p>
                <p>↩️ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="section product-tabs-section">
        <div className="container">
          <div className="tabs">
            <button className="tab active">Description</button>
            <button className="tab">How to Use</button>
            <button className="tab">Ingredients</button>
            <button className="tab">Reviews</button>
          </div>
          
          <div className="tab-content">
            <div className="tab-panel active">
              <h2>Product Description</h2>
              <p>
                Grounds to Grow Premium Vermicompost is a revolutionary soil amendment made from 
                locally sourced coffee grounds processed through controlled vermicomposting. Our unique 
                process removes caffeine and harmful compounds while preserving essential nutrients, 
                creating a safe, effective compost perfect for urban gardening.
              </p>
              <h3>Key Benefits:</h3>
              <ul>
                <li><strong>Pet-Safe:</strong> All caffeine removed through worm digestion process</li>
                <li><strong>Nutrient-Rich:</strong> Contains nitrogen, phosphorus, potassium, and beneficial microorganisms</li>
                <li><strong>Soil Improvement:</strong> Enhances water retention and soil structure</li>
                <li><strong>Sustainable:</strong> Made from waste coffee grounds, reducing landfill impact</li>
                <li><strong>Urban-Friendly:</strong> Perfect for balcony gardens and container plants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Grounds to Grow?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🐾</div>
              <h3>Pet-Safe Formula</h3>
              <p>Caffeine removed through vermicomposting process - safe for households with pets</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Locally Sourced</h3>
              <p>Made from coffee grounds collected from Toronto cafes - supporting local economy</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">♻️</div>
              <h3>Eco-Friendly</h3>
              <p>Biodegradable packaging and sustainable production process</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>Money-Back Guarantee</h3>
              <p>30-day satisfaction guarantee - we stand behind our product</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
