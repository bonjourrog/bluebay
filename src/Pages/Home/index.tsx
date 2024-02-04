import Header from "../../Components/Header";
import Location from "../../Components/Location";
import Featured from "./Components/Featured";
import Hero from "./Components/Hero";
import WhyUs from "./Components/WhyUs";
import "./Home.css";
const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <Featured />
            <WhyUs />
            <Location />
        </div>
    );
};

export default Home;
