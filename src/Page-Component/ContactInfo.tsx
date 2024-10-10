import "../styles/PagesCss/ContactInfo.css";
import starIcon from "../assets/star-icon.png";

export default function ContactInfo() {
  return (
    <main className="ContactInfo-Container">
    <div className="info-content" data-aos="fade-up">
        <span className="icon-star" data-aos="zoom-in">
          <img src={starIcon} alt="star icon" />
        </span>
        <div className="features-header" data-aos="fade-right">
          <h1>Let's Connect</h1>
        </div>
        <div className="feature-sub" data-aos="fade-left">
        We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
        </div>

        <form className="property-form" data-aos="fade-up">
          <div className="form-row">
            <div className="form-group" data-aos="fade-right">
              <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" />
            </div>
            <div className="form-group" data-aos="fade-left">
              <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />
            </div>
            <div className="form-group" data-aos="fade-right">
              <input type="email" id="email" name="email" placeholder="Enter your Email" />
            </div>
            <div className="form-group" data-aos="fade-left">
              <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" data-aos="fade-up">
              <select id="preferredLocation">
                <option>Select Inquiry type</option>
              </select>
            </div>
            <div className="form-group" data-aos="fade-up">
              <select id="propertyType">
                <option>Select Property Type</option>
              </select>
            </div>
            <div className="form-group" data-aos="fade-up">
              <select id="noOfBathrooms">
                <option>How do you hear about us</option>
              </select>
            </div>
          </div>


          <div className="form-group message" data-aos="fade-up">
            <textarea placeholder="Enter your Message here." rows={5}></textarea>
          </div>

          <div className="form-group" data-aos="fade-up">
              <input type="checkbox" /> 
              I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
          </div>

          <div className="form-group" data-aos="fade-up">
            <button type="submit" className="submit-btn">Send Your Message</button>
          </div>
        </form>
      </div>
    </main>
  )
}
