import './Services.css';
import { IoCarSportOutline } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";

const Services = ()=>{
    return <section className='Services' id='services'>
        <div className='Services__header'>            
        <h2 className='Services__headline'>Servicios</h2>
        <p className='services__message'>En nuestro catálogo encontrarás una amplia gama de opciones para satisfacer todas tus necesidades de movilidad y cuidado vehicular</p>
            <img src="https://res.cloudinary.com/dzqoo2so5/image/upload/v1708315925/bluebay/images/pfv4x9zrwgaxaccz8fxw.jpg" alt="" />
        </div>
        <div className='Services__container'>
            <ul className='Services__list'>
                <li className='service'>
                    <IoCarSportOutline className='service__icon'/>
                    <h6>RENTA</h6>
                    <p className='service__details'>
                        Si buscas autos en renta, en Blue Bay Car Rental tenemos una gran variedad de opciones para ti, con los mejores precios en la ciudad.
                    </p>
                </li>
                <li className='service'>
                    <GiSteeringWheel className='service__icon'/>
                    <h6>CHOFER</h6>
                    <p className='service__details'>
                        En Blue Bay Car Rental contamos con servicio de chofer en puerto peñasco
                    </p>
                </li>
            </ul>
        </div>
    </section>
}

export default Services;