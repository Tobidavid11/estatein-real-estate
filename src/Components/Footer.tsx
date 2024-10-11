import "../styles/Footer.css";
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className="Footer-container">
      <div className="footer-content">
        <div className="message-content">
          <span>
            <img src={logo} alt="Logo" className="footer-logo" />
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="footer-input"
            aria-label="Email Subscription"
          />
        </div>

        <div className="list-section">
          <div className="list">
            <p>Home</p>
            <ul>
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="list">
            <p>About Us</p>
            <ul>
              <li>Company Info</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="list">
            <p>Properties</p>
            <ul>
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>

          <div className="list">
            <p>Services</p>
            <ul>
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Property Management</li>
            </ul>
          </div>

          <div className="list">
            <p>Contact Us</p>
            <ul>
              <li>Contact Form</li>
              <li>Our Office</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
