import Header from "../../Components/Header";
import Carwash from "./Components/CarWash";
import Contact from "./Components/Contact";
import Featured from "./Components/Featured";
import Hero from "./Components/Hero";
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
            <Contact />
            <Carwash />
            <VehicleDetails />
        </div>
    );
};

export default Home;
