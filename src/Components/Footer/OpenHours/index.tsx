import './OpenHours.css';
import { OpenHoursProps } from './OpenHours.props';

const OpenHours: React.FC<OpenHoursProps> = ()=>{
    return <ul>
        <li>Lunes.....08:00-07:00</li>
        <li>Martes.....08:00-07:00</li>
        <li>Miercoles.....08:00-07:00</li>
        <li>Jueves.....08:00-07:00</li>
        <li>Viernes.....08:00-07:00</li>
        <li>Sabado.....08:00-07:00</li>
    </ul>
}
export default OpenHours;