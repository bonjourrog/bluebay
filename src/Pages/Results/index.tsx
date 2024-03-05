import { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header';
import './Results.css';
import { VehicleContext } from '../../Context/Vehicle';
import {Dayjs} from 'dayjs';
import { Vehicle } from '../../Entity/Vehicle';
import VehicleCard from '../../Components/VehicleCard';
import Search from '../../Components/Search';
import Footer from '../../Components/Footer';

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

    }, []);

    return <div className='results'>
        <Header/>
        <div style={{marginTop:"5em"}}></div>
        <h1>Elije la mejor copcion que se adapte a tus necesidades</h1>
        <div style={{marginTop:"10em"}}></div>
        <Search/>
        <ul className='results__list'>
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