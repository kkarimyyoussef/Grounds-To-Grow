import './Home.css';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

function Home({ setCurrentPage }: HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Transform Coffee Grounds Into Premium Compost</h1>
          <p className="hero-subtitle">
            Science-backed vermicomposting turns spent coffee grounds into pet-safe, nutrient-rich soil amendments for urban gardeners.
          </p>
          <div className="hero-cta">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shop'); }} className="btn btn-primary">Shop Now</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('learn'); }} className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="public/frontPageImage.png" alt="Vermicomposting bins with rich soil"/>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section problem-section">
        <div className="container">
          <h2 className="section-title">Why Coffee Grounds Waste Needs a Solution</h2>
          <div className="problem-content">
            <p className="lead-text">
              Every year, <strong>over 2 million kilograms</strong> of coffee grounds are dumped into landfills daily in Canada alone. 
              Raw coffee waste is unsafe for pets (caffeine is lethal to most household pets) and can harm plants if used improperly.
            </p>
            <p>
              <strong>Grounds to Grow</strong> transforms this waste into premium, pet-safe vermicompost through controlled worm digestion, 
              removing caffeine toxicity while creating nutrient-rich soil amendments perfect for balcony and small-space gardeners.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">What Makes Our Compost Unique?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Science-Backed</h3>
              <p>Carefully blended: coffee grounds, worm castings, biochar, and natural amendments, made safe through controlled vermicomposting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🐾</div>
              <h3>Pet-Safe</h3>
              <p>Caffeine toxicity is removed by worm digestion, making it safe for households with pets or children.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏙️</div>
              <h3>Urban Optimized</h3>
              <p>Improves water retention, soil structure, and supports soil microbes—exactly what shallow pots and balcony gardens need.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3>Sustainable</h3>
              <p>We source used coffee grounds from local cafes, creating a circular economy that reduces waste and enriches soil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market & Target */}
      <section className="section market-section">
        <div className="container">
          <h2 className="section-title">Who We Help</h2>
          <div className="market-content">
            <div className="market-stat">
              <div className="stat-number">43%</div>
              <div className="stat-label">of Toronto dwellings are balcony-friendly</div>
            </div>
            <div className="market-stat">
              <div className="stat-number">59,000+</div>
              <div className="stat-label">regular balcony gardeners in Toronto</div>
            </div>
            <div className="market-stat">
              <div className="stat-number">2M+ kg</div>
              <div className="stat-label">coffee grounds wasted daily in Canada</div>
            </div>
          </div>
          <p className="market-text">
            We focus on urban gardeners and plant lovers, especially those growing in shallow pots or containers. 
            Our target market includes condo and apartment dwellers with limited soil and space who value sustainable, 
            effective solutions for their balcony gardens.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="section usage-section">
        <div className="container">
          <h2 className="section-title">How to Use</h2>
          <div className="usage-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Mix Into Soil</h3>
                <p>Simply mix 1 pod or sachet into the top 2–5cm of soil for a 10–12" pot. For smaller pots, use ½ pod or one pod per 2–3 plants.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Repeat Regularly</h3>
                <p>Apply every 6–8 weeks for happy, healthy balcony or indoor plants.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Water as Usual</h3>
                <p>Our vermicompost helps soil stay moist, nutrient-rich, and ready to grow!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is it safe and compliant?</h3>
              <p>Our product is classified as a soil supplement (not a fertilizer) in Canada. All ingredients are non-toxic and approved for home gardening with clear labeling and safety information included.</p>
            </div>
            <div className="faq-item">
              <h3>What's the pricing?</h3>
              <p>Competitor prices range from $7–15 per packet. Our starter packs are priced for affordability and frequent re-use, with petite coffee-bag style packaging.</p>
            </div>
            <div className="faq-item">
              <h3>How is it made?</h3>
              <p>We source used coffee grounds from local cafes, vermicompost with red worms to remove caffeine, then blend, dry, and package for direct shipping to you. Sustainable, local, and fresh.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use it with pets?</h3>
              <p>Yes! The vermicomposting process removes caffeine toxicity, making it safe for households with pets. Raw coffee grounds are dangerous for pets, but our processed product is pet-safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Garden?</h2>
          <p className="cta-text">Join thousands of urban gardeners using Grounds to Grow compost</p>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shop'); }} className="btn btn-primary btn-large">Shop Now</a>
        </div>
      </section>
    </>
  );
}

export default Home;
