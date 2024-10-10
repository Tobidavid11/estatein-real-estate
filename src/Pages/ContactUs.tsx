import Conclusion from "../Components/Conclusion";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MediaFooter from "../Components/MediaFooter";
import Navbar from "../Components/Navbar";
import ContactInfo from "../Page-Component/ContactInfo";
import ContactUsHero from "../Page-Component/ContactUsHero";
import Location from "../Page-Component/Location";

export default function ContactUs() {
  return (
    <main>
      <Header/>
      <Navbar/>
     <ContactUsHero/>
     <ContactInfo/>
     <Location/>
      <Conclusion/>
      <Footer/>
      <MediaFooter/>
    </main>
  )
}
