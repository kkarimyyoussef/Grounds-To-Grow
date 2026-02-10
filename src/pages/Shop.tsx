import './Shop.css';

function Shop() {
  return (
    <div className="shop-page">
      <section className="section shop-hero">
        <div className="container">
          <h1 className="page-title">Shop Grounds to Grow</h1>
          <p className="page-subtitle">Premium vermicompost products for urban gardeners</p>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="/frontPageImage.png" alt="Starter Pack" />
              </div>
              <div className="product-info">
                <h3>Starter Pack</h3>
                <p className="product-description">Perfect for beginners. Includes 3 pods of premium vermicompost.</p>
                <div className="product-price">$24.99</div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="/frontPageImage.png" alt="Monthly Subscription" />
              </div>
              <div className="product-info">
                <h3>Monthly Subscription</h3>
                <p className="product-description">Get fresh compost delivered monthly. Save 15% with subscription.</p>
                <div className="product-price">$21.24/month</div>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="/frontPageImage.png" alt="Bulk Pack" />
              </div>
              <div className="product-info">
                <h3>Bulk Pack</h3>
                <p className="product-description">For serious gardeners. 12 pods with free shipping included.</p>
                <div className="product-price">$89.99</div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="/frontPageImage.png" alt="Gift Set" />
              </div>
              <div className="product-info">
                <h3>Gift Set</h3>
                <p className="product-description">Perfect gift for plant lovers. Includes 6 pods and care guide.</p>
                <div className="product-price">$49.99</div>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Grounds to Grow?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Pet-Safe Formula</h4>
                <p>Caffeine removed through vermicomposting process</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Locally Sourced</h4>
                <p>Made from coffee grounds collected from Toronto cafes</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Eco-Friendly Packaging</h4>
                <p>Biodegradable sachets that are good for the planet</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Money-Back Guarantee</h4>
                <p>30-day satisfaction guarantee on all products</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;

