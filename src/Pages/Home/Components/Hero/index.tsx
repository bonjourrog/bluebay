import "./Hero.css";
import { HeroProps } from "./Hero.props";

const Hero: React.FC<HeroProps> = ({message, height}) => {
    return (
        <section className="hero" style={{height: height}}>
            <div className="hero__image">
                <img
                    src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1708315925/bluebay/images/pfv4x9zrwgaxaccz8fxw.jpg"
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
