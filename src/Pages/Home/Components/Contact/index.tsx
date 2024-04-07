import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import { Icon, LatLngExpression } from "leaflet";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./Componets/Form";

const Contact = () => {
    const position: LatLngExpression = [
        31.307140664329328, -113.52933853255794,
    ];

    const newIcon = new Icon({
        iconUrl:"https://res.cloudinary.com/dzqoo2so5/image/upload/v1708627618/bluebay/images/z1yqutc6dlgvfuyaa1hb.jpg",
        iconSize: [80, 80],
        className:"icon"
    });

    return (
        <section className="Location" id="contact">
            <ContactForm/>
            {/* <h2 className="location-headline">CONTACT</h2> */}
            <ul className="business-info">
                <li className="busines__contact">
                    <ul>
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
                            Blv. Freemont S/N COL. CENTRO C.P 83550. Puerto Peñasco, Sonora méxico
                        </li>
                    </ul>
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
