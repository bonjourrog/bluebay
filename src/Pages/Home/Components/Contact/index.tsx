import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import { Icon, LatLngExpression } from "leaflet";
import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const Contact = () => {
    const position: LatLngExpression = [
        31.307140664329328, -113.52933853255794,
    ];

    const newIcon = new Icon({
        iconUrl:
            "https://img.freepik.com/free-photo/vertical-low-angle-shot-high-rise-building-glass-facade-clear-sky_181624-6151.jpg?w=360&t=st=1706812836~exp=1706813436~hmac=e0c8044e11da2357545f80b6735e725790693324aab3795c537b90799cf38794",
        iconSize: [80, 80],
    });

    return (
        <section className="Location">
            <form className="form">
                <div className="form__header">
                    <h3 className="business-name">BLUE BAY</h3>
                    <p className="business-city">Puerto Peñasco</p>
                </div>
                <label htmlFor="email">
                    <p>Nombre</p>
                    <input id="email" type="email" />
                </label>
                <label htmlFor="">
                    <p>Mensaje</p>
                    <textarea rows={7} name="" id=""></textarea>
                </label>
                <button>Send</button>
            </form>
            <h2 className="location-headline">CONTACT</h2>
            <ul className="business-info">
                <li className="business__socials">
                    <a href="#">
                        <FaFacebook className="business__social-icon" />
                    </a>
                    <a href="#">
                        <RiInstagramFill className="business__social-icon" />
                    </a>
                    <a href="#">
                        <IoLogoWhatsapp className="business__social-icon" />
                    </a>
                </li>
                <li className="busines__contact">
                    <li>
                        <MdEmail />
                        contact@bluebay.com
                    </li>
                    <li>
                        <MdLocalPhone />
                        0000000000
                    </li>
                    <li>
                        <TiLocation />
                        Blv. Freemont
                    </li>
                </li>
            </ul>
            <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={newIcon}></Marker>
            </MapContainer>
        </section>
    );
};

export default Contact;
