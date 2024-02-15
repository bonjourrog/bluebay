import "./WhyUs.css";
import { FaArrowRightLong, FaRegCalendarCheck } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdLocalCarWash } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { RiUserSmileFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";

const WhyUs = () => {
    return (
        <section className="WhyUs">
            <h2 className="WhyUs__headline">
                <span></span>
                <p>WHY</p>
                <p>BLUE BAY</p>
                <p>?</p>
            </h2>
            <section className="whyus__features">
                <ul className="whyus__features-list">
                    <li className="whyus__feature">
                        <FaChartSimple className="whyus__feature-icon" />
                        <p>Transparent Rates</p>
                        <p>
                            Clear and straightforward rates with no hidden
                            surprises.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <RiUserSmileFill className="whyus__feature-icon" />
                        <p>Customer Satisfaction Commitment</p>
                        <p>
                            We strive to exceed your expectations and ensure you
                            enjoy your rental experience to the fullest.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <FaRegCalendarCheck className="whyus__feature-icon" />
                        <p>Easy Booking</p>
                        <p>
                            We simplify the booking process, allowing you to
                            secure your car quickly without unnecessary
                            complications.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <BiSolidTimeFive className="whyus__feature-icon" />
                        <p>Flexible Hours</p>
                        <p>
                            We adapt to your schedule, enabling you to pick up
                            and return the car at times that suit your needs.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <IoCalendarNumber className="whyus__feature-icon" />
                        <p>24/7 Assistance</p>
                        <p>
                            We're available around the clock to provide
                            assistance and resolve any issues you may encounter
                            during your trip.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <MdLocalCarWash className="whyus__feature-icon" />
                        <p>Cleanliness and Maintenance</p>
                        <p>
                            We keep our cars in impeccable condition, ensuring
                            each vehicle is clean and ready for the road.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="whyus__call-to-action">
                {/* <p>Book with us</p>
                <button>
                    Make a reservation <FaArrowRightLong />
                </button> */}
                <div className="whyus__image">
                    <img src="https://res.cloudinary.com/dtrkv16qb/image/upload/v1707074029/bluebay/id81o0pmu55q9cjzsq6c.png" />
                </div>
            </section>
        </section>
    );
};

export default WhyUs;
