import { useContext } from "react";
import "./VehicleDetails.css";
import { VehicleContext } from "../../../../Context/Vehicle";
import { IoCloseOutline } from "react-icons/io5";

const VehicleDetails = () => {
    const { isDetailsOpen, setIsDetailsOpen, vehicleToShow } =
        useContext(VehicleContext);
    return (
        <section
            className={`Vehicle-Details ${
                isDetailsOpen ? "details-opened" : "details-closed"
            }`}
        >
            <div className="details">
                <div className="features-header">
                    <IoCloseOutline
                        className="close-details"
                        onClick={() => setIsDetailsOpen(false)}
                    />
                </div>
                <div className="vehicle__photos">
                    <div className="photo-to-show">
                        <img src={vehicleToShow.image} alt="" />
                    </div>
                    <ul className="photos-list">
                        <li>
                            <img src={vehicleToShow.image} alt="" />
                        </li>
                        <li>
                            <img src={vehicleToShow.image} alt="" />
                        </li>
                        <li>
                            <img src={vehicleToShow.image} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="details-list">
                    <p className="vehicle__name">
                        {vehicleToShow.make} {vehicleToShow.model}
                        {vehicleToShow.sport ? (
                            <span className="isVehicleSport">sport</span>
                        ) : undefined}
                    </p>
                    <p className="vehicle-price">
                        ${vehicleToShow.daily_rate}
                        <small style={{ color: "gray", fontSize: ".7em" }}>
                            /Day
                        </small>
                    </p>
                    <ul className="vehicle-features">
                        <li className="vehicle-features__headline">Features</li>
                        <li>{vehicleToShow.year}</li>
                        <li>
                            <img
                                width="15"
                                height="15"
                                src="https://img.icons8.com/material-outlined/24/FFFFFF/gearbox-selector.png"
                                alt="gearbox-selector"
                            />
                            {vehicleToShow.transmission}
                        </li>
                        <li className="vehicle-doors">
                            <img
                                width="15"
                                height="15"
                                src="https://img.icons8.com/material-rounded/24/FFFFFF/car-door.png"
                                alt="car-door"
                            />
                            {vehicleToShow.doors}
                        </li>
                        <li>
                            <img
                                width="15"
                                height="15"
                                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/queue.png"
                                alt="queue"
                            />
                            {vehicleToShow.passenger_capacity}
                        </li>
                        {vehicleToShow.available ? (
                            <li style={{ color: "rgb(82, 186, 82)" }}>
                                Disponible
                            </li>
                        ) : (
                            <li style={{ color: "rgb(186, 82, 82)" }}>
                                No Disponible
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VehicleDetails;
