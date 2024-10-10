import "../styles/ClientsTalk.css";
import Client1 from "../assets/Client1.png";
import Client2 from "../assets/Client2.png";
import Client3 from "../assets/Client3.png";
import Star from "../assets/Star.png";
import starIcon from "../assets/star-icon.png";

export default function ClientsTalk() {
  const testimonials = [
    {
      rating: 5,
      title: "Exceptional Service!",
      content: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      image: Client1
    },
    {
      rating: 5,
      title: "Efficient and Reliable",
      content: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      location: "USA, Florida",
      image: Client2
    },
    {
      rating: 5,
      title: "Trusted Advisors",
      content: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      location: "USA, Nevada",
      image: Client3
    }
  ];

  return (
    <div className="clients-talk-container">
      <div className="clients-talk-content">
        <span className="icon-star">
          <img src={starIcon} alt="star icon" />
        </span>
        <div className="clients-talk-header">
          <h2 data-aos="zoom-out">What Our Clients Say</h2>
          <div className="clients-talk-subheader">
            <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            <button>View All Testimonials</button>
          </div>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up"
            data-aos-duration="1000">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                 <div key={i} className="star-container">
                 <img src={Star} alt="star" />
               </div>
                ))}
              </div>
              <h3>{testimonial.title}</h3>
              <p>{testimonial.content}</p>
              <div className="client-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
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