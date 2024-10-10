import "../styles/Features.css";
import Image1 from "../assets/image-2.png";
import Image2 from "../assets/image-3.png";
import Image3 from "../assets/image-4.png";
import starIcon from "../assets/star-icon.png";
import bedIcon from "../assets/bed-icon.png";
import bathIcon from "../assets/bath-icon.png";
import areaIcon from "../assets/area-icon.png";

export default function Features() {
  const properties = [
    {
      image: Image1,
      title: "Seaside Serenity Villa",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      price: "$550,000",
      beds: 4,
      baths: 3,
      area: "villa"
    },
    {
      image: Image2,
      title: "Metropolitan Haven",
      description: "A chic and fully furnished 2-bedroom apartment with panoramic city views...",
      price: "$650,000",
      beds: 2,
      baths: 2,
      area: "villa"
    },
    {
      image: Image3,
      title: "Rustic Retreat Cottage",
      description: "An elegant 3-bedroom, 2-bathroom townhouse in a gated community...",
      price: "$550,000",
      beds: 3,
      baths: 3,
      area: "villa"
    }
  ];

  return (
    <div className="features-container">
      <div className="features">
        <span className="star-icon">
          <img src={starIcon} alt="star" />
        </span>
        <div className="features-header">
          <h1 data-aos="zoom-in">Featured Properties</h1>
        </div>
          <div className="features-sub">
            <p data-aos="zoom-out">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
            <button data-aos="fade-up-left">View All Properties</button>
          </div>

        <div className="feature-boxes" >
          {properties.map((property, index) => (
            <div className="property-box" key={index} data-aos="zoom-in-right">
              <img src={property.image} alt={property.title} className="property-image" />
              <h3>{property.title}</h3>
              <p>{property.description} <a href="#">Read More</a></p>
              <span id="price">Price</span>
              <div className="property-details">
                <span className="price">{property.price}</span>
                <button className="view-details">View Property Details</button>
              </div>
              <div className="property-features">
                <span><img src={bedIcon} alt="bed" /> {property.beds} Bedroom</span>
                <span><img src={bathIcon} alt="bath" /> {property.baths} Bathroom</span>
                <span><img src={areaIcon} alt="area" /> {property.area}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <span>01 of 10</span> 
          <div className="pagination-buttons">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}