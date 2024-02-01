import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <img
                    src="https://img.freepik.com/free-photo/car-road-night-city_384344-5499.jpg?t=st=1706759972~exp=1706763572~hmac=4b9234d66c0b1898f63e443c3b1765d7cb11354b1381cb5e25e433f18ac4b2ee&w=826"
                    alt="parked cars"
                />
            </div>
            <div className="hero__headlines">
                <h1 className="hero__tagline hero__headline">
                    Unleash the Journey, <br />
                    Embrace the Experience
                </h1>
                <p className="hero__introduction hero__headline">
                    Step into a world where your desires set the course.
                </p>
            </div>
            <div className="hero__button">
                <button className="button">Explore Vehicles</button>
            </div>
        </section>
    );
};

export default Hero;
