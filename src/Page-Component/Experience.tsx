import "../styles/PagesCss/Experience.css";
import starIcon from "../assets/star-icon.png";

interface ExperienceStepProps {
  step: number;
  title: string;
  description: string;
}

const ExperienceStep: React.FC<ExperienceStepProps> = ({ step, title, description }) => (
  <div className="step-box" data-aos="fade-up">
    <div className="step-box-bg"></div>
    <h4>Step {step.toString().padStart(2, '0')}</h4>
    <h5>{title}</h5>
    <p>{description}</p>
  </div>
);

export default function Experience() {
  const steps = [
    {
      title: "Discover a World of Possibilities",
      description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
    },
    {
      title: "Narrowing Down Your Choices",
      description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
    },
    {
      title: "Personalized Guidance",
      description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
    },
    {
      title: "See It for Yourself",
      description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
    },
    {
      title: "Making Informed Decisions",
      description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
    },
    {
      title: "Getting the Best Deal",
      description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
    }
  ];

  return (
    <section className="Experience-container">
      <div className="Experience-content">
        <div className="Experience-Header" data-aos="fade-up">
          <img src={starIcon} alt="Star Icon" className="star-icon" />
          <h2>Navigating the Estatein Experience</h2>
          <p>
            At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works:
          </p>
        </div>

        <div className="Experience-steps">
          {steps.map((step, index) => (
            <ExperienceStep
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
