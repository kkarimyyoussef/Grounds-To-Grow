import './Learn.css';

function Learn() {
  return (
    <div className="learn-page">
      <section className="section learn-hero">
        <div className="container">
          <h1 className="page-title">Learn About Vermicomposting</h1>
          <p className="page-subtitle">Everything you need to know about transforming coffee grounds into rich compost</p>
        </div>
      </section>

      <section className="section learn-content">
        <div className="container">
          <div className="learn-grid">
            <div className="learn-card">
              <h2>What is Vermicomposting?</h2>
              <p>
                Vermicomposting is the process of using earthworms to break down organic waste materials, 
                transforming them into nutrient-rich compost. Unlike traditional composting, vermicomposting 
                is faster, produces higher-quality compost, and can be done in smaller spaces—perfect for 
                urban environments.
              </p>
              <p>
                At Grounds to Grow, we use red wiggler worms (Eisenia fetida) to process spent coffee grounds, 
                creating a premium soil amendment that's safe for plants, pets, and people.
              </p>
            </div>

            <div className="learn-card">
              <h2>Why Coffee Grounds?</h2>
              <p>
                Coffee grounds are rich in nitrogen, potassium, and other essential nutrients that plants need. 
                However, raw coffee grounds contain caffeine and other compounds that can be harmful to plants 
                and pets if used directly.
              </p>
              <p>
                Through vermicomposting, worms break down these compounds, removing caffeine toxicity while 
                creating a balanced, nutrient-rich compost that improves soil structure, water retention, and 
                microbial activity.
              </p>
            </div>

            <div className="learn-card">
              <h2>The Science Behind It</h2>
              <p>
                Our vermicomposting process involves carefully controlled conditions where red wiggler worms 
                consume coffee grounds along with biochar and other natural amendments. The worms' digestive 
                process removes phytotoxins like caffeine and tannins, while their castings (waste) create 
                a rich, stable compost.
              </p>
              <p>
                The final product contains beneficial microorganisms, enzymes, and nutrients in forms that 
                are immediately available to plants, making it superior to raw coffee grounds or traditional 
                compost.
              </p>
            </div>

            <div className="learn-card">
              <h2>Benefits for Your Garden</h2>
              <ul>
                <li><strong>Improved Soil Structure:</strong> Enhances soil porosity and aeration</li>
                <li><strong>Better Water Retention:</strong> Helps soil retain moisture longer</li>
                <li><strong>Nutrient Rich:</strong> Provides essential nutrients in plant-available forms</li>
                <li><strong>Microbial Support:</strong> Introduces beneficial microorganisms to your soil</li>
                <li><strong>pH Balancing:</strong> Helps stabilize soil pH for optimal plant growth</li>
                <li><strong>Pet Safe:</strong> No caffeine or harmful compounds</li>
              </ul>
            </div>

            <div className="learn-card">
              <h2>How to Use Our Product</h2>
              <ol>
                <li>For a 10-12 inch pot, mix one pod into the top 2-5cm of soil</li>
                <li>For smaller pots, use half a pod or share one pod between 2-3 plants</li>
                <li>Apply every 6-8 weeks during growing season</li>
                <li>Water as usual after application</li>
                <li>Store unused pods in a cool, dry place</li>
              </ol>
            </div>

            <div className="learn-card">
              <h2>Common Questions</h2>
              <div className="faq-item">
                <h3>Can I use this with houseplants?</h3>
                <p>Yes! Our compost is perfect for indoor and outdoor container plants, including houseplants, herbs, vegetables, and flowers.</p>
              </div>
              <div className="faq-item">
                <h3>Is it safe for edible plants?</h3>
                <p>Absolutely. Our vermicompost is safe for all plants, including vegetables and herbs you plan to consume.</p>
              </div>
              <div className="faq-item">
                <h3>How long does it last?</h3>
                <p>When stored properly in a cool, dry place, our compost pods maintain their quality for up to 2 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;

