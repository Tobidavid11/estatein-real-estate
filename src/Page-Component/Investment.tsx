import "../styles/PagesCss/Investment.css";
import ServiceIconOne from "../assets/ServiceIconOne.png";
import ServiceIconTwo from "../assets/ServiceIconTwo.png";
import ServiceIconThree from "../assets/ServiceIconThree.png";
import ServiceIconFour from "../assets/ServiceIconFour.png";
export default function Investment() {
  return (
    <div className="values-section" data-aos="fade-up">
    <div className="values-container">
      <div className="values-text" data-aos="fade-right">
        <h2 className="values-heading" data-aos="flip-up">Smart Investments, Informed Decisions</h2>
        <p className="values-description" data-aos="flip-left">
        Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.
        </p>
      </div>
      <div className="values-box">
        <h4>Unlock Your Investment Potential</h4>
        <p>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
        <button>Learn More</button> 
      </div>
      <div className="values-cards" data-aos="fade-left">
        <div className="value-card" data-aos="flip-up">
          <img src={ServiceIconOne} alt="Trust Icon" className="value-icon" />
          <div className="value-text">
            <h3 data-aos="flip-right">Market Insight</h3>
            <p data-aos="flip-left">Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions</p>
          </div>
        </div>
        <div className="value-card" data-aos="flip-up">
          <img src={ServiceIconTwo} alt="Excellence Icon" className="value-icon" />
          <div className="value-text">
            <h3 data-aos="flip-right">ROI Assessment</h3>
            <p data-aos="flip-left">Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
          </div>
        </div>
        <div className="value-card" data-aos="flip-up">
          <img src={ServiceIconThree}  className="value-icon" />
          <div className="value-text">
            <h3 data-aos="flip-right">Customized Strategies</h3>
            <p data-aos="flip-left">Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
          </div>
        </div>
        <div className="value-card" data-aos="flip-up">
          <img src={ServiceIconFour} alt="Commitment Icon" className="value-icon" />
          <div className="value-text">
            <h3 data-aos="flip-right">Diversification Mastery</h3>
            <p data-aos="flip-left">Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}
