import "../styles/PagesCss/PropInfo.css";
import starIcon from "../assets/star-icon.png";
import PhoneIcon from "../assets/phone-icon.png";
import EmailIcon from "../assets/mail-icon.png";

export default function PropInfo() {
  return (
    <main className="info-container">
      <div className="info-content" data-aos="fade-up">
        <span className="icon-star" data-aos="zoom-in">
          <img src={starIcon} alt="star icon" />
        </span>
        <div className="features-header" data-aos="fade-right">
          <h1>Let's Make it Happen</h1>
        </div>
        <div className="feature-sub" data-aos="fade-left">
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
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
                <option>Select Location</option>
              </select>
            </div>
            <div className="form-group" data-aos="fade-up">
              <select id="propertyType">
                <option>Select Property Type</option>
              </select>
            </div>
            <div className="form-group" data-aos="fade-up">
              <select id="noOfBathrooms">
                <option>Select no. of Bathrooms</option>
              </select>
            </div>
            <div className="form-group" data-aos="fade-up">
              <select id="noOfBedrooms">
                <option>Select no. of Bedrooms</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" data-aos="fade-up">
              <select id="budget">
                <option>Select Budget</option> 
              </select>
            </div>
            <div className="form-group contact-method" data-aos="fade-up">
              <label>Preferred Contact Method</label>
              <div className="contact-options">
                <div className="input-container">
                  <div className="number">
                    <img src={PhoneIcon} alt="Phone Icon" />
                    <input type="tel" placeholder="Enter Phone Number" />
                  </div>
                </div>

                <div className="input-container">
                  <div className="number">
                    <img src={EmailIcon} alt="Email Icon" />
                    <input type="email" placeholder="Enter Email Address" />
                  </div>
                </div>
              </div>
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
  );
}
