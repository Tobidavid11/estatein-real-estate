import "../styles/HeroBody.css";
import arrow from "../assets/arrow-icon.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/Icon-2.png";
import icon3 from "../assets/Icon-3.png";
import icon4 from "../assets/Icon-4.png";
export default function HeroBody() {
  return (
    <main className="herobody-container">
<div className="box-container">
  <div className="boxes" data-aos="flip-down">
    <span className="icon-arrow">
      <img src={arrow} alt="" />
    </span>
    <span className="icon">
      <img src={icon1} alt="icon" />
      <p>Find Your Dream Home</p>
    </span>
  </div>
  <div className="boxes" data-aos="flip-up">
    <span className="icon-arrow">
      <img src={arrow} alt="" />
    </span>
    <span className="icon">
      <img src={icon2} alt="icon" />
      <p>Unlock Property Value</p>
    </span>
  </div>
  <div className="boxes" data-aos="flip-down">
    <span className="icon-arrow">
      <img src={arrow} alt="" />
    </span>
    <span className="icon">
      <img src={icon3} alt="icon" />
      <p>Effortless Property Management</p>
    </span>
  </div>
  <div className="boxes" data-aos="flip-up">
    <span className="icon-arrow">
      <img src={arrow} alt="" />
    </span>
    <span className="icon">
      <img src={icon4} alt="icon" />
      <p>Smart Investments, Informed Decisions</p>
    </span>      
  </div>
 
</div>
    </main>
  )
}
 