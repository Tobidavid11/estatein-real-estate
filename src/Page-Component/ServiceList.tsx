import "../styles/PagesCss/ServiceList.css";
import starIcon from "../assets/star-icon.png";
import Investment from "./Investment";
import Conclusion from "../Components/Conclusion";
import Footer from "../Components/Footer";
import MediaFooter from "../Components/MediaFooter";

export default function ServiceList() {
                              const steps = [
                                {
                                titleOne: "Valuation Mastery",
                                  descriptionOne: "Discover the true worth of your property with our expert valuation services."
                                },
                                {
                                  titleOne: "Strategic Marketing",
                                  descriptionOne: "Selling a property requires more than just a listing; it demands a strategic marketing."
                                },
                                {
                                  titleOne: "Negotiation Wizardry",
                                  descriptionOne: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
                                },
                                {
                                  titleOne: "Closing Success",
                                  descriptionOne: "A successful sale is not complete until the closing. We guide you through the intricate closing process."
                                }
                              ];

                        const stepsii = [
                          {
                            titleTwo: "Tenant Harmony",
                            descriptionTwo: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
                          },
                          {
                            titleTwo: "Maintenance Ease",
                            descriptionTwo: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                          },
                          {
                            titleTwo: "Financial Peace of Mind",
                            descriptionTwo: "Managing property finances can be complex. Our financial experts take care of rent collection"
                          },
                          {
                            titleTwo: "Legal Guardian",
                        descriptionTwo: "Stay compliant with property laws and regulations effortlessly."
                          }
                        ];
  return (
<div className="main-container">
<div className="service-container">
     <div className="servicelist-content">
<div className="servicelist-header" data-aos= "fade-up">
<img src={starIcon} alt="" />
<h2>Unlock Property Value</h2>
<p>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
</div>
<div className="servicelist-stepOne">
{steps.map((step , index) => (
<div key={index} className="step-box" data-aos= "fade-up">
<div className="step-box-bg"></div>
<h5>{step.titleOne}</h5>
<p>{step.descriptionOne}</p>
</div>
))}
</div>
                <div className="box">
                  <div className="box-header">
                    <div className="header-content">
                      <h4>Experience Effortless Property Management</h4>
                      <button>Learn More</button>
                    </div>
                    <div className="box-sub"> 
                      <p>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                    </div>
                  </div>
                </div>

    </div>

    <div className="serviceList-content">
    <div className="servicelist-header" data-aos= "fade-up">
<img src={starIcon} alt="" />
<h2>Effortless Property Management</h2>
<p>Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
  </div>
<div className="servicelist-stepOne"> 
{
  stepsii.map((step , index) =>(
    <div key={index} className="step-box" data-aos= "fade-down">  
<div className="step-box-bg"></div>
<h5>{step.titleTwo}</h5>
<p>{step.descriptionTwo}</p>
</div>
  ))
}
</div>
                    <div className="box">
                       <div className="box-header">
                        <div className="header-content"> 
                          <h4>Experience Effortless Property Management</h4>
                          <button>Learn More</button>
                        </div>
                        <div className="box-sub"> 
                          <p>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                        </div>
                      </div>
                    </div>
    </div>
    <div className="Investment-container">
      <Investment/>
    </div>
 </div>  
    <Conclusion/>      
    <Footer/>
    <MediaFooter/>
</div>    
  )
}
