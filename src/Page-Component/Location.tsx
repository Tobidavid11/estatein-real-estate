import "../styles/PagesCss/Location.css";
import starIcon from "../assets/star-icon.png";
import ImageOne from "../assets/BuildingOne.png";
import ImageTwo from "../assets/BuildingTwo.png";
import ImageThree from "../assets/BuildingThree.png";
import ImageFour from "../assets/BuildingFour.png";
import ImageFive from "../assets/BuildingFive.png";
import ImageSix from "../assets/BuildingSix.png";
import EmailIcon from "../assets/ContactIconOne.png";
import PhoneIcon from "../assets/ContactIconTwo.png";
import LocationIcon from "../assets/ContactIconThree.png";
export default function Location() {
  return (
<div className="Overall-Container">
<main className="Locaton-Container">
    <div className="location-content">
    <span className="icon-star" data-aos="zoom-in">
          <img src={starIcon} alt="star icon" />
        </span>
        <div className="Location-Header">
            <h1>Discover Our Location</h1>
            <p>Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</p>
        </div>
        <div className="Location-type">
            <span className="type">All</span>
            <span className="type">Regional</span>
            <span className="type">International</span>
        </div>
                            <div className="Location-box">
                                <h5>Main Headquarters</h5>
                                <h2>123 Estatein Plaza, City Center, Metropolis</h2>
                                <p>Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                                <span className="contact-type">
  <button id="contact-option">
    <div className="contact-info">
      <img src={EmailIcon} alt="" />
      <p>info@estatein.com</p>
    </div>
  </button>
  <button id="contact-option">
    <div className="contact-info">
      <img src={PhoneIcon} alt="" />
      <p>+1 (123) 456-7890</p>
    </div>
  </button>
  <button id="contact-option">
    <div className="contact-info">
      <img src={LocationIcon} alt="" />
      <p>Metropolis</p>
    </div>
  </button>
</span>
                    <button className="search">
                        Get Direction
                    </button>
                            </div>

                            <div className="Location-box">
                                <h5>Regional Offices</h5>
                                <h2>456 Urban Avenue, Downtown District, Metropolis</h2>
                                <p>Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>
                                <span className="contact-type">
  <button id="contact-option">
    <div className="contact-info">
      <img src={EmailIcon} alt="" />
      <p>info@estatein.com</p>
    </div>
  </button>
  <button id="contact-option">
    <div className="contact-info">
      <img src={PhoneIcon} alt="" />
      <p>+1 (123) 456-7890</p>
    </div>
  </button>
  <button id="contact-option">
    <div className="contact-info">
      <img src={LocationIcon} alt="" />
      <p>Metropolis</p>
    </div>
  </button>
</span>
                    <button className="search">
                        Get Direction
                    </button>
                            </div>                          
    </div>

  <div className="Estatein-Office">
    <div className="Office-header">
    <span className="icon-star" data-aos="zoom-in">
          <img src={starIcon} alt="star icon" />
        </span>
        <div className="Office-info">
            <h1>Explore Estatein's World</h1>
            <p>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
        </div>
    </div>
   <div className="Office-images">
    <img src={ImageOne} alt="" />
    <img src={ImageTwo} alt="" />
    <img src={ImageThree} alt="" />
    <img src={ImageFour} alt="" />
    <img src={ImageFive} alt="" />
    <img src={ImageSix} alt="" />
    </div> 
    </div>  
    </main>
</div>
  )
}
