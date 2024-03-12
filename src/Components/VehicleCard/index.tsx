import './VehicleCard.css';
import { VehicleProps } from "./VehicleCard.props";

import { PiMoneyBold } from "react-icons/pi";
import { MdCameraswitch } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdReduceCapacity } from "react-icons/md";
import { useContext } from 'react';
import { VehicleContext } from '../../Context/Vehicle';

const VehicleCard: React.FC<VehicleProps> = ({vehicle, date_range})=>{
    const {setShowContractForm, setVehicleToShow} = useContext(VehicleContext);

    const handleClick = ()=>{
        setShowContractForm(true)
        setVehicleToShow(vehicle)
    }

    return <li className="vehicle">
        <img className='vheicle__image' src={vehicle.image} alt="" />
        <div className='vehicle__info'>
        <p className='vehicle__make'>{vehicle.make} - {vehicle.model}</p>
            <ul className='features'>
                <li><PiMoneyBold className="check-icon"/>${vehicle.daily_rate}/Día</li>
                <li><GiGearStickPattern className="check-icon"/>{vehicle.transmission}</li>
                <li><MdCameraswitch className="check-icon" style={{color: vehicle.reverse_camera?"":"gray"}}/>Camara de reversa: {vehicle.reverse_camera?"si":"no"}</li>
                <li><MdReduceCapacity className="check-icon"/>Pasajeros {vehicle.passenger_capacity}</li>
            </ul>
        </div>
        <div className='vehicle__total'>
            {
                date_range < 7 ? <p className='vehicle__price'>${vehicle.daily_rate * date_range}</p> : undefined
            }
            {
                date_range >= 7 && date_range <30 ? <p className='vehicle__price'>${(vehicle.daily_rate * date_range)-((vehicle.daily_rate * date_range)*.3)}</p>: undefined
            }
            {
                date_range >= 30 ? <p className='vehicle__price'>${(vehicle.daily_rate * date_range)-((vehicle.daily_rate * date_range)*.4)}</p> : undefined
            }
            <button onClick={handleClick} className='vehicle__btn'>Agendar</button>
        </div>
    </li>;
}

export default VehicleCard;