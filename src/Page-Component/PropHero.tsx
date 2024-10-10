import "../styles/PagesCss/PropHero.css";
import SearchIcon from "../assets/search-cicon.png";
import LocationIcon from "../assets/location-icon.png";
import PropertiesIcon from "../assets/Property-icon.png";
import PricingIcon from "../assets/Pricing-icon.png";
import PropSizeIcon from "../assets/PropSize-icon.png";
import BuildYearIcon from "../assets/BuildYear-icon.png";
import Property1 from "../assets/image-2.png";
import Property2 from "../assets/image-3.png";
import Property3 from "../assets/image-4.png";

export default function PropHero() {
  return (
    <div className="Prophero-section">
      <div className="Prophero-content">
        <h1    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Find Your Dream Property</h1>
        <p data-aos="fade-up-left">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey begins here.
        </p>

        <div className="search-bar"data-aos="fade-up">
          <input
            type="text"
            placeholder="Search For A Property"
            className="search-input"
          />
          <button className="search-btn">
            <img src={SearchIcon} alt="Search" />
            Find Property
          </button>
        </div>

        <div className="filters">
          <div className="filter-item">
            <img src={LocationIcon} alt="Location" />
            <span>Location</span>
          </div>
          <div className="filter-item">
            <img src={PropertiesIcon} alt="Property Type" />
            <span>Property Type</span>
          </div>
          <div className="filter-item">
            <img src={PricingIcon} alt="Pricing Range" />
            <span>Pricing Range</span>
          </div>
          <div className="filter-item">
            <img src={PropSizeIcon} alt="Property Size" />
            <span>Property Size</span>
          </div>
          <div className="filter-item">
            <img src={BuildYearIcon} alt="Build Year" />
            <span>Build Year</span>
          </div>
        </div>
      </div>

      <div className="discover-section">
        <h2>Discover a World of Possibilities</h2>
        <p>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.</p>
        <div className="property-grid">
          <div className="property-card">
            <img src={Property1} alt="Seaside Serenity Villa" />
            <div className="property-info">
              <h3>Seaside Serenity Villa</h3>
              <p className="location">Coastal Escapes - Where Waves Beckon</p>
              <p className="description">Discover the epitome of coastal living with our Seaside Serenity Villa.</p>
              <div className="price-action">
                <p className="price">$1,250,000</p>
                <button className="view-details">View Property Details</button>
              </div>
            </div>
          </div>
          <div className="property-card">
            <img src={Property2} alt="Metropolitan Haven" />
            <div className="property-info">
              <h3>Metropolitan Haven</h3>
              <p className="location">Urban Oasis - Life in the Heart of the City</p>
              <p className="description">Experience the pulse of urban living in our Metropolitan Haven.</p>
              <div className="price-action">
                <p className="price">$650,000</p>
                <button className="view-details">View Property Details</button>
              </div>
            </div>
          </div>
          <div className="property-card">
            <img src={Property3} alt="Rustic Retreat Cottage" />
            <div className="property-info">
              <h3>Rustic Retreat Cottage</h3>
              <p className="location">Countryside Charm - Escape to Nature's Embrace</p>
              <p className="description">Find tranquility in our Rustic Retreat Cottage, a charming countryside escape.</p>
              <div className="price-action">
                <p className="price">$350,000</p>
                <button className="view-details">View Property Details</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}