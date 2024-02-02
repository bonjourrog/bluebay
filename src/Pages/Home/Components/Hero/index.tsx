import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <img
                    src="https://res.cloudinary.com/dtrkv16qb/image/upload/v1706902237/bluebay/hqk9dj9bfreduarjisyc.png"
                    alt="parked cars"
                />
            </div>
            <div className="hero__headlines">
                <h1 className="hero__tagline hero__headline">
                    Ride with Confidence
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
