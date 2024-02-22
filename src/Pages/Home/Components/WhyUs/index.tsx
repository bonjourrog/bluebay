import "./WhyUs.css";
import { FaRegCalendarCheck } from "react-icons/fa6";
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
                <p>¿Por qué</p>
                <p>BLUE BAY</p>
                <p>?</p>
            </h2>
            <section className="whyus__features">
                <ul className="whyus__features-list">
                    <li className="whyus__feature">
                        <FaChartSimple className="whyus__feature-icon" />
                        <p>Tarifas transparentes</p>
                        <p>
                            Tarifas claras y directas sin sorpresas ocultas.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <RiUserSmileFill className="whyus__feature-icon" />
                        <p>Compromiso de satisfacción del cliente</p>
                        <p>
                            Nos esforzamos por superar sus expectativas y garantizar que disfrute al máximo de su experiencia de alquiler.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <FaRegCalendarCheck className="whyus__feature-icon" />
                        <p>Reserva fácil</p>
                        <p>
                            Simplificamos el proceso de reserva, permitiéndote asegurar tu coche rápidamente y sin complicaciones innecesarias.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <BiSolidTimeFive className="whyus__feature-icon" />
                        <p>Horario flexible</p>
                        <p>
                            Nos adaptamos a tus horarios, permitiéndote recoger y devolver el coche en el horario que más te convenga.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <IoCalendarNumber className="whyus__feature-icon" />
                        <p>Asistencia 24/7</p>
                        <p>
                            Estamos disponibles las 24 horas para brindar asistencia y resolver cualquier problema que pueda encontrar durante su viaje.
                        </p>
                    </li>
                    <li className="whyus__feature">
                        <MdLocalCarWash className="whyus__feature-icon" />
                        <p>Limpieza y mantenimiento</p>
                        <p>
                            Mantenemos nuestros autos en impecables condiciones, asegurando que cada vehículo esté limpio y listo para la carretera.
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
