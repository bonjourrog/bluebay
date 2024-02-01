import Header from "../../Components/Header";
import Featured from "./Components/Featured";
import Hero from "./Components/Hero";
import "./Home.css";
const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <Featured />
        </div>
    );
};

export default Home;
