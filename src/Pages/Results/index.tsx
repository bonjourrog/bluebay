import { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header';
import './Results.css';
import { VehicleContext } from '../../Context/Vehicle';
import {Dayjs} from 'dayjs';
import { Vehicle } from '../../Entity/Vehicle';
import VehicleCard from '../../Components/VehicleCard';
import Search from '../../Components/Search';
import Footer from '../../Components/Footer';
import Hero from '../Home/Components/Hero';
import Contract from '../../Components/Contract';

const Results = ()=>{
    const {startDate, endDate, vehicles} = useContext(VehicleContext);
    const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);
    const [dateRange, setDateRange] = useState<number>(0);
    const days: Dayjs[] = [];
    
    function calculateDays ():Dayjs[]{
        
        let currentDate: Dayjs = startDate;

        while(currentDate.isBefore(endDate)){
            days.push(currentDate);
            currentDate = currentDate.add(1, "day");
        }
        return days;
    }

    useEffect(()=>{
        setDateRange( calculateDays().length);
        setVehicleList(vehicles.filter(vehicle => vehicle.available));
        console.log(vehicleList);

    }, [endDate]);

    return <div className='results'>
        <Contract/>
        <Header showNavbar={false}/>
        <Hero message={""} height="50vh"/>
        <div className='space'></div>
        <div className='results__info'>
            <p>Aprobecha nuestras ofertas</p>
            <ul className='results__offers'>
                <li className='offer'>
                    <span>30%</span>
                    <p>Obten un 30% de descuento al reservar desde 1 semana</p>
                </li>
                <li className='offer'>
                    <span>40%</span>
                    <p>Obten un 40% de descuetno al reservar desde 1 mes</p>
                </li>
            </ul>
        </div>

        <ul className='results__list'>
        <Search showSearchBtn={false}/>
        {
            vehicleList.map((vehicle:Vehicle)=>(
                <VehicleCard key={vehicle.id} vehicle={vehicle} date_range={dateRange}/>
            ))
        }
        </ul>
        <Footer DarkBg/>
    </div>
}

export default Results;