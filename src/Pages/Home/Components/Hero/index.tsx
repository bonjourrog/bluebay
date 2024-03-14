import "./Hero.css";
import { HeroProps } from "./Hero.props";

const Hero: React.FC<HeroProps> = ({message, height}) => {
    return (
        <section className="hero" style={{height: height}}>
            <div className="hero__image">
                <img
                    src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1710440926/bluebay/images/cdoh3xpockv6yvblipac.jpg"
                    alt="parked cars"
                />
            </div>
            <div className="hero__headlines">
                <h1 className="hero__tagline hero__headline">
                    {message}
                </h1>
            </div>
        </section>
    );
};

export default Hero;
