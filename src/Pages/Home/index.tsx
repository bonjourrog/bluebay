import Header from "../../Components/Header";
import Contact from "./Components/Contact";
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
            <Contact />
        </div>
    );
};

export default Home;
