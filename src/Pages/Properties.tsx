import Conclusion from "../Components/Conclusion";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MediaFooter from "../Components/MediaFooter";
import Navbar from "../Components/Navbar";
import PropHero from "../Page-Component/PropHero";
import PropInfo from "../Page-Component/PropInfo";
export default function Properties() {
  return (
    <main className="Properties-container">
      <Header/>
      <Navbar/>
      <PropHero/>
      <PropInfo/>
      <Conclusion/>
      <Footer/>
      <MediaFooter/> 
    </main>
  )
}
