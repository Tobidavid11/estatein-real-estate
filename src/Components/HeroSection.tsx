import "../styles/HeroSection.css";
import image from "../assets/image-1.png";

export default function HeroSection() {

  
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Discover Your Dream Property</h1>
          <h2 className="hero-subtitle" data-aos="fade-up-right">with Estatein</h2>
          <p className="hero-description" data-aos="fade-up-left">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" data-aos="fade-up-right">Learn More</button>
            <button className="secondary-btn" data-aos="fade-up-left">Browse Properties</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-box" data-aos="flip-right">
            <h3>200+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box" data-aos="flip-left">
            <h3>10k+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="stat-box" data-aos="flip-right">
            <h3>16+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-up">
        <img src={image} alt="Beautiful Property" />
      </div>
    </section>
  );
}
 