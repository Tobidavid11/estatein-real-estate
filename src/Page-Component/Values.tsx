import "../styles/PagesCss/Values.css";
import TrustIcon from "../assets/Trust-icon.png";
import ExcellenceIcon from "../assets/Excellence-icon.png";
import ClientCentricIcon from "../assets/Client-centric-icon.png";
import CommitmentIcon from "../assets/Commitment-icon.png";


export default function Values() {
  return (
    <div className="values-section" data-aos="fade-up">
      <div className="values-container">
        <div className="values-text" data-aos="fade-right">
          <h2 className="values-heading" data-aos="flip-up">Our Values</h2>
          <p className="values-description" data-aos="flip-left">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transformed the ordinary.
          </p>
        </div>
        <div className="values-cards" data-aos="fade-left">
          <div className="value-card" data-aos="flip-up">
            <img src={TrustIcon} alt="Trust Icon" className="value-icon" />
            <div className="value-text">
              <h3 data-aos="flip-right">Trust</h3>
              <p data-aos="flip-left">Trust is the cornerstone of every successful real estate transaction.</p>
            </div>
          </div>
          <div className="value-card" data-aos="flip-up">
            <img src={ExcellenceIcon} alt="Excellence Icon" className="value-icon" />
            <div className="value-text">
              <h3 data-aos="flip-right">Excellence</h3>
              <p data-aos="flip-left">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
            </div>
          </div>
          <div className="value-card" data-aos="flip-up">
            <img src={ClientCentricIcon} alt="Client-Centric Icon" className="value-icon" />
            <div className="value-text">
              <h3 data-aos="flip-right">Client-Centric</h3>
              <p data-aos="flip-left">Your dreams and needs are at the center of our universe. We listen, understand, and deliver.</p>
            </div>
          </div>
          <div className="value-card" data-aos="flip-up">
            <img src={CommitmentIcon} alt="Commitment Icon" className="value-icon" />
            <div className="value-text">
              <h3 data-aos="flip-right">Our Commitment</h3>
              <p data-aos="flip-left">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
