import { useContext } from "react";
import "./FeaturedCard.css";
import { FeaturedCardProps } from "./FeaturesCard.props";
import { VehicleContext } from "../../../../../../Context/Vehicle";

const FeaturedCard: React.FC<FeaturedCardProps> = ({ vehicle }) => {
    const { setIsDetailsOpen, setVehicleToShow } = useContext(VehicleContext);

    const handleSeeMoreButton = () => {
        setIsDetailsOpen(true);
        setVehicleToShow(vehicle);
    };
    return (
        <>
            <li className="featured-car">
                <div className="features-car__image">
                    <img src={vehicle.image} />
                </div>
                <ul>
                    <li className="featured-car__name">
                        {vehicle.make} {vehicle.model}
                        {/* {vehicle.sport ? (
                            <p
                                style={{
                                    position: "absolute",
                                    right: "13em",
                                    border: ".1em solid rgb(90, 146, 250)",
                                    padding: ".2em .4em",
                                    fontSize: ".4em",
                                    marginLeft: ".5em",
                                    fontWeight: "300",
                                    borderRadius: "10em",
                                    letterSpacing: ".3em",
                                }}
                            >
                                sport
                            </p>
                        ) : null} */}
                    </li>
                    <li className="featured-car__year">2024</li>
                    <li className="featured-car__price">
                        <p>
                            ${vehicle.daily_rate}
                            <small>/Día</small>
                        </p>
                        <button
                            onClick={() => handleSeeMoreButton()}
                            className="see-more"
                        >
                            Ver Más
                        </button>
                    </li>
                </ul>
            </li>
        </>
    );
};

export default FeaturedCard;
