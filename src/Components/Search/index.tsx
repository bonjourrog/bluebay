import "./Search.css";
import { useContext, useEffect } from "react";
import { DatePicker } from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import { BiSearch } from "react-icons/bi";
import { VehicleContext } from "../../Context/Vehicle";
import { Link } from "react-router-dom";

const Search = () => {

    const {startDate, setStartDate, endDate, setEndDate} = useContext(VehicleContext);
    
    let min = dayjs(new Date());
    const {RangePicker} = DatePicker;
    let currentTime = new Date().getHours();

    const handleStartDate = (date:string[])=>{
        const startD: Dayjs = dayjs(date[0]);
        const endD: Dayjs = dayjs(date[1]);

        setStartDate(startD);
        if(startD.get("month") == endD.get("month") && startD.get("date") == endD.get("date")){
            setEndDate(endD.add(1, 'day'));
            return
        }
        setEndDate(endD);
    }

    const range = (start:number, end:number): number[] =>{
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledRangeTime(date:Dayjs, type?:string) {
        return {
            disabledHours: () => {
                
                let hoursAvailability:number[]

                if((currentTime>8  && currentTime <=18) && startDate.get("date") === dayjs(new Date()).get("date")){
                    hoursAvailability = range(0, currentTime+1).concat(range(19,24));
                }else{
                    hoursAvailability = range(0, 8).concat(range(19,24))
                }

                return hoursAvailability
            }
        }
    }

    useEffect(()=>{
        if(currentTime >= 18){
            setStartDate(startDate.add(1, "day"))

        }
    },[])
    return (
        <div className="Search">
            <RangePicker
                allowEmpty={false}
                allowClear={false}
                minDate={min}
                className="date-picker"
                value={[startDate, endDate]}
                defaultValue={[startDate, endDate]}
                onChange={(_, dateString)=>handleStartDate(dateString)}
            />
            <DatePicker 
                format={"HH:mm"} 
                minuteStep={10} 
                disabledTime={disabledRangeTime} 
                picker="time" 
                showNow={false}
                className="time-picker"/>
            <Link to={"/results"} className="search-button">
                <BiSearch color="white" size={30}/>
            </Link>
        </div>
    );
};

export default Search;
