import "../styles/PagesCss/Team.css";
import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";
import Team4 from "../assets/Team4.png";
import BirdIcon from "../assets/bird-icon.png";
import SendIcon from "../assets/send-icon.png";

const Team = () => {
  return (
 <div className="team-container">
     <div className="team-section">
      <h2 className="section-title" data-aos="fade-up-left">Meet the Estatein Team</h2>
      <p className="section-subtitle">
        At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
      </p>

      <div className="team-members">
        {[
          {img: Team1, name: 'Max Mitchell', title: 'Founder'},
          {img: Team2, name: 'Sarah Johnson', title: 'Chief Real Estate Officer'},
          {img: Team3, name: 'David Brown', title: 'Head of Property Management'},
          {img: Team4, name: 'Michael Turner', title: 'Legal Counsel'}
        ].map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image-container">
              <img src={member.img} alt={member.name} className="team-image" />
              <img src={BirdIcon} alt="Twitter" className="twitter-icon" />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <div className="say-hello-container">
                <input type="text" placeholder="Say Hello 👋" className="say-hello-input" />
                <img src={SendIcon} alt="Send" className="send-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

<div className="info-container">
<h2 className="section-title">Our Valued Clients</h2>
      <p className="section-subtitle">
        At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.
      </p>

      <div className="clients-section">
        <div className="client-card">
          <h3 className="client-name">ABC Corporation</h3>
          <p className="client-since">Since 2019</p>
          <p className="client-domain">Domain: Commercial Real Estate</p>
          <p className="client-category">Category: Luxury Home Development</p>
          <p className="client-testimonial">
            <strong>What They Said:</strong> Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.
          </p>
          <a href="#" className="visit-website">Visit Website</a>
        </div>
        <div className="client-card">
          <h3 className="client-name">GreenTech Enterprises</h3>
          <p className="client-since">Since 2018</p>
          <p className="client-domain">Domain: Commercial Real Estate</p>
          <p className="client-category">Category: Retail Space</p>
          <p className="client-testimonial">
            <strong>What They Said:</strong> Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.
          </p>
          <a href="#" className="visit-website">Visit Website</a>
        </div>
      </div>

      <div className="pagination">
        <span className="current-page">01 of 10</span>
        <div className="arrows">
          <button className="arrow left" aria-label="Previous page">{'<'}</button>
          <button className="arrow right" aria-label="Next page">{'>'}</button>
        </div>
      </div>
</div>
    </div>
 </div>
  );
}

export default Team;