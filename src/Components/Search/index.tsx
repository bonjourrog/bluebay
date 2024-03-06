import "./Search.css";
import { DatePicker } from 'antd';
import dayjs, {Dayjs} from 'dayjs';
import { useContext, useEffect } from "react";
import { VehicleContext } from "../../Context/Vehicle";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SearchProps } from "./Search.props";

const Search:React.FC<SearchProps> = ({showSearchBtn}) => {

    const {startDate, setStartDate, endDate, setEndDate, currentTime, setCurrentTime} = useContext(VehicleContext);
    
    let min: Dayjs = dayjs(new Date());
    const {RangePicker} = DatePicker;
    let _currentTime = new Date().getHours();

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

    function disabledRangeTime() {
        return {
            disabledHours: () => {
                let hoursAvailability:number[];
                if((_currentTime>8  && _currentTime <=18) && startDate.get("date") === dayjs(new Date()).get("date")){
                    hoursAvailability = range(0, _currentTime+1).concat(range(19,24));
                }else{
                    hoursAvailability = range(0, 8).concat(range(19,24))
                }
                return hoursAvailability
            }
        }
    }

    const handleTime= ( time: string | string[])=>{
        setCurrentTime(time)
    }

    useEffect(()=>{
        if(_currentTime >= 18){
            setStartDate(startDate.add(1, "day"));
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
                value={currentTime}
                onChange={(time)=>handleTime(time)}
                picker="time" 
                showNow={false}
                className="time-picker"/>
                {
                    showSearchBtn
                    ?
                    (<Link to={"/results"} className="search-button">
                        <BiSearch color="white" size={30}/>
                    </Link>)
                    :
                    undefined
                }
        </div>
    );
};



export default Search;
