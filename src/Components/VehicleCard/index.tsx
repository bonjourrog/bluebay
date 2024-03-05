import './VehicleCard.css';
import { VehicleProps } from "./VehicleCard.props";
import { MdOutlineCheckCircle } from "react-icons/md";

const VehicleCard: React.FC<VehicleProps> = ({vehicle, date_range})=>{
    return <li className="vehicle">
        <img className='vheicle__image' src={vehicle.image} alt="" />
        <div className='vehicle__np'>
            <p className='vehicle__make'>{vehicle.make} - {vehicle.model}</p>
            <p className='vehicle__price'>${vehicle.daily_rate * date_range}</p>
        </div>
        <ul className='vehicle__info'>
            <li><MdOutlineCheckCircle className="check-icon"/>${vehicle.daily_rate}/Día</li>
            <li><MdOutlineCheckCircle className="check-icon"/>{vehicle.transmission}</li>
            <li><MdOutlineCheckCircle className="check-icon" style={{color: vehicle.reverse_camera?"":"gray"}}/>Camara de reversa: {vehicle.reverse_camera?"si":"no"}</li>
            <li><MdOutlineCheckCircle className="check-icon"/>Pasageros {vehicle.passenger_capacity}</li>
        </ul>
        <button className='vehicle__btn'>Agendar</button>
    </li>;
}

export default VehicleCard;