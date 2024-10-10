import "../styles/PagesCss/AboutUs.css";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import AboutHero from "../Page-Component/AboutHero";
import Achievement from "../Page-Component/Achievement";
import Values from "../Page-Component/Values";
import Experience from "../Page-Component/Experience"
import Team from "../Page-Component/Team";
import Conclusion from "../Components/Conclusion";
import Footer from "../Components/Footer";
import MediaFooter from "../Components/MediaFooter";
export default function AboutUs() {
  return (
    <div className="About-container">
      <Header/>
      <Navbar/>
      <AboutHero/> 
      <Values/>
      <Achievement/>
      <Experience/>
      <Team/>
      <Conclusion/>
      <Footer/>
      <MediaFooter/> 
    </div>
  )
}
