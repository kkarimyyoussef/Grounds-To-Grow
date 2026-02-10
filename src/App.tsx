import './App.css';
import './index.css';

function GtgIcons() {
  return (
    <span className="gtg-icons">
      {/* Search */}
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2"/></svg>
      {/* Profile */}
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      {/* Cart */}
      <svg viewBox="0 0 24 24"><circle cx="10" cy="20.5" r="1.5" fill="currentColor"/><circle cx="18" cy="20.5" r="1.5" fill="currentColor"/><path d="M2 2h3l.6 3M6 6h15l-1.5 8H8L6.5 6z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    </span>
  );
}

function App() {
  return (
    <div className="gtg-root">
      <div className="gtg-topbar">FREE SHIPPING on orders over $50</div>
      {/* Header Row: logo and navigation */}
      <header>
        <div className="gtg-header-row">
          <nav className="gtg-nav">
            <a href="#leaf" className="gtg-logo-link">
              <img
                src="/logo1.png"
                alt="Ground to Grow logo"
                className="gtg-logo"
              />
            </a>
            <a href="#shop">Shop</a>
            <a href="#about">Learn About Composting</a>
            <a href="#about">About</a>
            <GtgIcons />
          </nav>
        </div>
    </header>

      {/* Full-width hero image banner */}
      <div className="gtg-hero-banner">
      <img
        className="gtg-hero-img"
        src="/frontPageImage.png"
        alt="Composting outdoors with bins and containers"
      />
    </div>

      <main className="gtg-main-section">
        {/* Section: Problem Statement */}
        <div className="gtg-section-title">Why Coffee Grounds Waste Needs a Solution</div>
        <p className="gtg-hero-text">
          Every year, millions of kilograms of coffee grounds are dumped into landfills, leaching nutrients and releasing greenhouse gases. Raw coffee waste is also unsafe for pets and can harm plants if used improperly. <strong>Ground to Grow</strong> is here to change that, upcycling coffee waste into premium, pet-safe vermicompost for balcony and small-space gardeners.
        </p>
        {/* Section: Product Overview */}
        <div className="gtg-section-title">What Makes Our Compost Unique?</div>
        <ul className="gtg-section-list">
          <li><strong>Science-Backed:</strong> Carefully blended: coffee grounds, worm castings, biochar, and natural amendments, made safe through controlled vermicomposting.</li>
          <li><strong>Safer for Pets & People:</strong> Caffeine toxicity is removed by worm digestion, making it safe for households with pets or children.</li>
          <li><strong>Optimized for Urban Gardens:</strong> Improves water retention, soil structure, and supports soil microbes—exactly what shallow pots and balcony gardens need.</li>
        </ul>
        {/* Section: Market Opportunity */}
        <div className="gtg-section-title">Who We Help</div>
        <ul className="gtg-market-list">
          <li><strong>Condo & Apartment Gardeners:</strong> ~43% of Toronto dwellings are balcony-friendly. We focus on urban growers with limited soil and space.</li>
          <li><strong>Target Market:</strong> Urban gardeners and plant lovers, especially those growing in shallow pots or containers.</li>
          <li><strong>Market Sizing:</strong> In Toronto alone, <b>up to 59,000</b> regular balcony gardeners; typical pilot uptake 2–5% (≈900–2,700 early adopters).</li>
        </ul>
        {/* Section: Benefits & Effectiveness */}
        <div className="gtg-section-title">Why Our Solution Matters</div>
        <ul className="gtg-section-list">
          <li><strong>Reduces Waste:</strong> Coffee is Canada’s #1 beverage—over 2 million kilograms of grounds are thrown out daily. We turn this waste into value.</li>
          <li><strong>Boosts Urban Greening:</strong> Healthier city plants and less urban runoff, supporting biodiversity on balconies and beyond.</li>
        </ul>
        {/* Section: How to Use */}
        <div className="gtg-section-title">How to Use</div>
        <ol className="gtg-guide-list">
          <li>Simply mix 1 pod or sachet into the top 2–5cm of soil for a 10–12" pot. For smaller pots, use ½ pod or one pod per 2–3 plants.</li>
          <li>Repeat every 6–8 weeks for happy, healthy balcony or indoor plants.</li>
          <li>Water as usual—our vermicompost helps soil stay moist, nutrient-rich, and ready to grow!</li>
        </ol>
        {/* Section: Compliance, Pricing, Logistics, Resources */}
        <div className="gtg-section-title">FAQ & Details</div>
        <ul className="gtg-section-list">
          <li><strong>Is It Safe & Compliant?</strong> Our product is classified as a soil supplement (not a fertilizer) in Canada—safer labeling, tested components, and no nutrient/yield claims. All ingredients are non-toxic and approved for home gardening; clear label and safety info included.</li>
          <li><strong>Pricing & Packaging:</strong> Competitor prices: $7–15 per packet. Our starter packs aim for affordability and frequent re-use. Petite coffee-bag style packaging—no raw grounds or plastics, only plant-ready compost in eco-friendly sachets.</li>
          <li><strong>Our Process: </strong>We source used coffee grounds from local cafes, vermicompost with red worms, blend, dry, and package for direct shipping to you. Sustainable, local, fresh.</li>
        </ul>
        <div className="gtg-section-title">Learn More / References</div>
        <ul className="gtg-section-list">
          <li><a href="https://www.epa.gov/recycle/composting-home" target="_blank" rel="noopener">U.S. EPA: Composting at Home</a></li>
          <li><a href="https://bioenterprise.ca/success-stories/rfine-biomass-solutions/" target="_blank" rel="noopener">Coffee Waste Stats (Bioenterprise)</a></li>
          <li><a href="https://agriculture.canada.ca/en/science/story-agricultural-science/scientific-achievements-agriculture/biochar-can-turn-plant-waste-healthy-soils-and-improve-environment" target="_blank" rel="noopener">About Biochar (Agriculture Canada)</a></li>
          <li><a href="https://laidbackgardener.blog/2025/04/26/which-potting-soil-for-containers-on-the-balcony/" target="_blank" rel="noopener">Balcony Gardening Tips</a></li>
          <li>Email: <a href="mailto:info@groundtogrow.com">info@groundtogrow.com</a></li>
        </ul>
      </main>
      <footer className="gtg-footer">
        <p>Ground to Grow &copy; {new Date().getFullYear()} | Cultivate Change</p>
      </footer>
    </div>
  );
}

export default App;
