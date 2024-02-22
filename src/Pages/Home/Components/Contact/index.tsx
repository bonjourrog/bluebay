import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import { Icon, LatLngExpression } from "leaflet";
import { TiLocation } from "react-icons/ti";
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
                <label htmlFor="name">
                    <p>Nombre</p>
                    <input id="name" type="name" />
                </label>
                <label htmlFor="email">
                    <p>Correo</p>
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
                <li className="busines__contact">
                    <li>
                        <MdEmail />
                        atencionalcliente@bluebaycarrental.com
                    </li>
                    <li>
                        <MdLocalPhone />
                        638-380-5280
                    </li>
                    <li>
                        <TiLocation />
                        Blv. Freemont 210
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
