import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:info@groundstogrow.com">info@groundstogrow.com</a></p>
                <p><a href="mailto:support@groundstogrow.com">support@groundstogrow.com</a></p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p><a href="tel:+14165551234">(416) 555-1234</a></p>
                <p>Monday - Friday: 9am - 5pm EST</p>
              </div>
              <div className="contact-item">
                <h3>Address</h3>
                <p>
                  123 Green Street<br />
                  Toronto, ON M5H 2N2<br />
                  Canada
                </p>
              </div>
              <div className="contact-item">
                <h3>Social Media</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="">Select a subject</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={6} required placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-contact-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How do I place an order?</h3>
              <p>You can order directly from our Shop page. We accept all major credit cards and offer secure checkout.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship outside of Toronto?</h3>
              <p>Currently, we ship within the Greater Toronto Area. We're working on expanding our shipping to other Canadian cities soon.</p>
            </div>
            <div className="faq-item">
              <h3>Can I visit your facility?</h3>
              <p>We offer tours by appointment. Please contact us to schedule a visit to see our vermicomposting process.</p>
            </div>
            <div className="faq-item">
              <h3>Do you partner with cafes?</h3>
              <p>Yes! We're always looking for new cafe partners. Contact us at partnerships@groundstogrow.com to learn more.</p>
            </div>
            <div className="faq-item">
              <h3>What's your return policy?</h3>
              <p>We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>You'll receive a tracking number via email once your order ships. You can also check your order status in your account.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;


