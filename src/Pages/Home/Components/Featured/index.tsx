import { useContext, useEffect, useState } from "react";
import "./Featured.css";
import { Vehicle } from "../../../../Entity/Vehicle";
import FeaturedCard from "./Components/FeaturedCar";
import { VehicleContext } from "../../../../Context/Vehicle";
import { FirebaseService } from "../../../../controller/FirebaseController";
import Search from "../../../../Components/Search";
import { filterModelVehicles } from "./FeatureUtils";
const Featured = () => {
    const { setVehicles } = useContext(VehicleContext);
    const [vehiclesToShow, setVehiclesToShow] = useState<Vehicle[]>([]);
    useEffect(()=>{
        FirebaseService.getVehicles().then(res=>{
            setVehicles(res);
            const newArray=filterModelVehicles(res);
            setVehiclesToShow(newArray);
        }).catch(_=>{
            console.log("error fetching data, look featured component");
        })
    },[]);
    return (
        <section className="Featured" id="fleet">
            <div className="Featured__search">
                <Search showSearchBtn={true}/>
            </div>
            <section className="featured__header">
                <h2 className="Featured__headline">Conoce nuestra flota</h2>
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
