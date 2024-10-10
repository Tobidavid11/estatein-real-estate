import "../styles/PagesCss/AboutHero.css";
import About1 from "../assets/about-1.png";
import starIcon from "../assets/star-icon.png";

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-content">
      <span className="icon-star">
                    <img src={starIcon} alt="star icon" />
                </span>
        <h1 className="about-hero-heading"   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          Our Journey
        </h1>
        <p className="about-hero-description" data-aos="fade-up-left">
          Our story is one of continuous growth and innovation. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
        </p>
        <div className="about-hero-stats">
          <div className="stat-item" data-aos="flip-right">
            <h2>200+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item" data-aos="flip-right">
            <h2>10k+</h2>
            <p>Properties For Clients</p>
          </div>
          <div className="stat-item" data-aos="flip-right">
            <h2>16+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="about-hero-image">
        <img src={About1} alt="Hand holding a property" />
      </div>
    </section>
  );
}
