import "./Search.css";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import { useState } from "react";
const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const handleDate = (dates: Date[]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="Search">
            <DatePicker
                className="date-picker"
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                // filterTime={()=>handleTime}
                popperClassName="date-picker__popper"
                onChange={(dates) => handleDate(dates as unknown as Date[])}
                showTimeSelect
                excludeTimes={[
                    setHours(setMinutes(new Date(), 0), 0),
                    setHours(setMinutes(new Date(), 1), 0),
                    // setHours(setMinutes(new Date(), 30), 18),
                    // setHours(setMinutes(new Date(), 30), 19),
                    // setHours(setMinutes(new Date(), 30), 17),
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
                selectsRange
                // inline
            />
        </div>
    );
};

export default Search;
