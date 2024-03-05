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
                    <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model} images with transparent background`}/>
                </div>
                <ul>
                    <li className="featured-car__name">
                        {vehicle.make} {vehicle.model}
                    </li>
                    <li className="featured-car__year">{vehicle.year}</li>
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
