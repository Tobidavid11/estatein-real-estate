import "../styles/FAQ.css";
import starIcon from "../assets/star-icon.png";

export default function FAQ() {
    const questions = [
        {
            question: "How do I search for properties on Estatein?",
            answer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
        },
        {
            question: "What documents do I need to sell my property through Estatein?",
            answer: "Find out about the necessary documentation for listing your property with us.",
        },
        {
            question: "How can I contact an Estatein agent?",
            answer: "Discover the different ways you can get in touch with our experienced agents.",
        },
    ];

    return (
        <div className="Faq-container">
            <div className="Faq-talk-content">
                <span className="icon-star">
                    <img src={starIcon} alt="star icon" />
                </span>
                <div className="Faq-talk-header">
                    <h2 data-aos="fade-right">Frequently Asked Questions</h2>
                    <div className="Faq-talk-subheader" data-aos="fade-right">
                        <p>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                        <button>View all FAQs</button>
                    </div>
                    <div className="questions">
                        {questions.map((questionItem, index) => (
                            <div className="questions-card" key={index} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <h3>{questionItem.question}</h3>
                                <p>{questionItem.answer}</p>
                                <button>Read More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
