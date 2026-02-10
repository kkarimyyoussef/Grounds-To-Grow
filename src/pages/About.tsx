import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="container">
          <h1 className="page-title">About Grounds to Grow</h1>
          <p className="page-subtitle">Transforming waste into growth, one coffee ground at a time</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Grounds to Grow was born from a simple observation: millions of kilograms of coffee grounds 
              are wasted every day, while urban gardeners struggle to find quality, sustainable soil amendments 
              for their balcony and container gardens.
            </p>
            <p>
              Founded in 2024, we set out to solve both problems by creating a circular economy that transforms 
              coffee waste into premium vermicompost. Our mission is to make sustainable gardening accessible 
              to everyone, especially those living in urban environments with limited space.
            </p>
            <p>
              We partner with local cafes across Toronto to collect spent coffee grounds, then process them 
              through controlled vermicomposting to create safe, effective, and sustainable compost products 
              for urban gardeners.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Reduce Waste</h3>
              <p>Divert coffee grounds from landfills and create value from what was once considered waste.</p>
            </div>
            <div className="mission-card">
              <h3>Support Urban Gardening</h3>
              <p>Provide accessible, effective soil amendments for city dwellers who want to grow their own food and plants.</p>
            </div>
            <div className="mission-card">
              <h3>Build Community</h3>
              <p>Connect coffee shops, gardeners, and environmentalists in a sustainable circular economy.</p>
            </div>
            <div className="mission-card">
              <h3>Educate & Inspire</h3>
              <p>Share knowledge about vermicomposting and sustainable practices to inspire more people to garden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>We're committed to environmental responsibility in everything we do, from sourcing to packaging.</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>We use science-backed methods and rigorous quality control to ensure the best product for our customers.</p>
            </div>
            <div className="value-item">
              <h3>Transparency</h3>
              <p>We're open about our process, ingredients, and impact, so you know exactly what you're getting.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>We believe sustainable gardening should be accessible to everyone, regardless of space or experience level.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Alex Johnson</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Passionate about sustainable agriculture and urban gardening with 10+ years in environmental science.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Sarah Chen</h3>
              <p className="member-role">Head of Operations</p>
              <p className="member-bio">Expert in vermicomposting and waste management, ensuring quality and efficiency in our process.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Mike Rodriguez</h3>
              <p className="member-role">Community Manager</p>
              <p className="member-bio">Builds relationships with local cafes and gardeners, spreading the word about sustainable composting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-number">50,000+</div>
              <div className="impact-label">kg of coffee grounds diverted from landfills</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">2,500+</div>
              <div className="impact-label">happy customers across Toronto</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">25+</div>
              <div className="impact-label">local cafe partners</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">100%</div>
              <div className="impact-label">biodegradable packaging</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

