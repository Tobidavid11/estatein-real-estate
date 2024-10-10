import "../styles/PagesCss/Achievement.css";
import starIcon from "../assets/star-icon.png";

export default function Achievement() {
    const questions = [
        {
            question: "3+ Years of Excellence",
            answer: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
        },
        {
            question: "Happy Clients",
            answer: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
        },
        {
            question: "Industry Recognition",
            answer: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
        },
    ];

    return (
        <div className="Faq-container">
            <div className="Faq-talk-content">
                <span className="icon-star">
                    <img src={starIcon} alt="star icon" />
                </span>
                <div className="Faq-talk-header">
                    <h2 data-aos="fade-right">Our Achievements</h2>
                    <div className="Faq-talk-subheader" data-aos="fade-right">
                        <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                    </div>
                    <div className="questions">
                        {questions.map((questionItem, index) => (
                            <div className="questions-card" key={index} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <h3>{questionItem.question}</h3>
                                <p>{questionItem.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
