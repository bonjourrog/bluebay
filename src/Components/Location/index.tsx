import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Location.css";
import { Icon, LatLngExpression } from "leaflet";

const Location = () => {
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
            <h2 className="location-headline">Location</h2>
            <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={newIcon}></Marker>
                <section className="bussnines-info">
                    <h3 className="bussines-name">BLUE BAY</h3>
                    <p className="bussines-city">Puerto Peñasco</p>
                    <ul className="bussines-contact">
                        <li>
                            <img
                                src="https://img.icons8.com/fluency-systems-regular/20/228BE6/new-post.png"
                                alt=""
                            />
                            bluebaycarrental638@gmail.com
                        </li>
                        <li>
                            <img
                                src="https://img.icons8.com/fluency-systems-regular/20/228BE6/phone.png"
                                alt=""
                            />
                            630000000
                        </li>
                        <li>
                            <img
                                src="https://img.icons8.com/fluency-systems-regular/20/228BE6/marker--v1.png"
                                alt=""
                            />
                            BLv. Freemont
                        </li>
                    </ul>
                </section>
            </MapContainer>
        </section>
    );
};

export default Location;
