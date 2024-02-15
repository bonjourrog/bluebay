import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import "./Featured.css";
import { Vehicle } from "../../../../Entity/Vehicle";
import { VEHICLES_DATA_MOCK } from "../../../../Mocks/Vehicles";
import FeaturedCard from "./Components/FeaturedCar";
import Filters from "./Components/Filters";
import { Filter } from "../../../../Entity/Filter";
import { VehicleContext } from "../../../../Context/Vehicle";

const Featured = () => {
    const { vehicles, setVehicles } = useContext(VehicleContext);
    const [vehiclesToShow, setVehiclesToShow] = useState<Vehicle[]>([]);

    const [filter, setFilter] = useState<Filter>({
        chico: true,
        grandes: false,
        all: false,
    });

    const getVehicles = () => {
        setVehicles(VEHICLES_DATA_MOCK);
        setVehiclesToShow(vehicles);

        const filterApply = Object.entries(filter)
            .filter(([_, value]) => value === true)
            .map(([key]) => key);

        const vehiclesfiltered: Vehicle[] = vehicles.filter(
            (elem) => elem.type === filterApply[0]
        );

        if (vehiclesfiltered.length === 0) {
            setVehiclesToShow(vehicles);
            return;
        }
        setVehiclesToShow(vehiclesfiltered);
    };

    useEffect(() => {
        getVehicles();
    }, [filter]);

    return (
        <section className="Featured">
            {/* <section className="search-date">
                <Search />
            </section> */}
            <section className="featured__header">
                <h2 className="Featured__headline">Conoce nuestra flota</h2>
                <Filters setFilter={setFilter} filter={filter} />
            </section>
            <ul className="featured-cars">
                <p className="bg__tagline">BLUE BAY</p>
                {vehiclesToShow.map((vehicle, index) => (
                    <FeaturedCard key={index} vehicle={vehicle} />
                ))}
            </ul>
        </section>
    );
};

export default Featured;
