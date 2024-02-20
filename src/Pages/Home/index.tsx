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
            <Header />
            <Hero />
            <Featured />
            <WhyUs />
            <Services/>
            <Contact />
            <Footer />
            <VehicleDetails />
        </div>
    );
};

export default Home;
