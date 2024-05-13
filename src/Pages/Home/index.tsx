import FAQ from "../../Components/FAQ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Contact from "./Components/Contact";
import Featured from "./Components/Featured";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import VehicleDetails from "./Components/VehicleDetails";
import WhyUs from "./Components/WhyUs";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <Header showNavbar={true}/>
            <Hero message="Tu próximo destino te espera" height="100vh"/>
            <Featured />
            <WhyUs />
            <Services/>
            <Contact />
            <FAQ/>
            <Footer DarkBg={false}/>
            <VehicleDetails />
        </div>
    );
};

export default Home;
