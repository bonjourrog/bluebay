import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <img
                    src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1708315925/bluebay/images/pfv4x9zrwgaxaccz8fxw.jpg"
                    alt="parked cars"
                />
            </div>
            <div className="hero__headlines">
                <h1 className="hero__tagline hero__headline">
                    Tu próximo destino te espera
                    {/* Unleash the Journey <br />
                    Embrace the Experience */}
                </h1>
                {/* <p className="hero__introduction hero__headline">
                    Step into a world where your desires set the course.
                </p> */}
            </div>
            {/* <div className="hero__button">
                <button className="button">Explore Vehicles</button>
            </div> */}
        </section>
    );
};

export default Hero;
