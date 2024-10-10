import Header from "../Components/Header";
import HeroBody from "../Components/HeroBody";
import Navbar from "../Components/Navbar";
import ServiceList from "../Page-Component/ServiceList";
import ServicesHero from "../Page-Component/ServicesHero";

export default function Services() {
  return (
    <div className="sevices-container">
      <Header/>
      <Navbar/>
      <ServicesHero/>
      <HeroBody/>
      <ServiceList/>
    </div>
  )
}
