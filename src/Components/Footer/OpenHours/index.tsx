import './OpenHours.css';
import { OpenHoursProps } from './OpenHours.props';

const OpenHours: React.FC<OpenHoursProps> = ()=>{
    return <ul className='openhours'>
        <li className='openhours__time'><p className='openhours__day'>Lunes</p>.............08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Martes</p>............08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Miercoles</p>.....08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Jueves</p>............08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Viernes</p>...........08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Sabado</p>...........08:00-07:00</li>
        <li className='openhours__time'><p className='openhours__day'>Domingo</p>.......08:00-03:00</li>
    </ul>
}
export default OpenHours;