import "../styles/PagesCss/ContactUsHero.css";
import ContactIconOne from "../assets/ContactIconOne.png";
import ContactIconTwo from "../assets/ContactIconTwo.png";
import ContactIconThree from "../assets/ContactIconThree.png";
import ContactIconFour from "../assets/ContactIconFour.png";
import arrow from "../assets/arrow-icon.png";

export default function ContactUsHero() {
  return (
   <div className="ContactPageContainer">
     <div className="ContactUsHero-container">
        <h1>Get in Touch with Estatein</h1>
        <p>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
    </div>
    <div className="contact-options">
<div className="contact-box-container">
<div className="contact-boxes" data-aos="flip-left">
    <span className="icon-arrow">
<img src={arrow} alt="" />
    </span>
    <span className="icon">
        <img src={ContactIconOne} alt="" />
        <p>info@estatein.com</p>
    </span>
</div>
                <div className="contact-boxes" data-aos="flip-left">
                    <span className="icon-arrow">
                <img src={arrow} alt="" />
                    </span>
                    <span className="icon">
                        <img src={ContactIconTwo} alt="" />
                        <p>+1 (123) 456-7890</p>
                    </span>
                </div>

                        <div className="contact-boxes" data-aos="flip-left">
                    <span className="icon-arrow">
                <img src={arrow} alt="" />
                    </span>
                    <span className="icon">
                        <img src={ContactIconThree} alt="" />
                        <p>Main Headquarters</p>
                    </span>
                </div>        

                <div className="contact-boxes" data-aos="flip-left">
                    <span className="icon-arrow">
                <img src={arrow} alt="" />
                    </span>
                    <span className="icon">
                        <img src={ContactIconFour} alt="" />
                        <p>Instagram LinkedIn Facebook</p>
                    </span>
                </div>                
</div>

    </div>
   </div>
  )
}
