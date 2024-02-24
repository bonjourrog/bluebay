import { TbCarSuv, TbCar } from "react-icons/tb";
import { LiaCarSolid } from "react-icons/lia";
import "./Filters.css";
import { FilterProps } from "./Filters.props";

const Filters: React.FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <ul className="featured__filter">
            <li
                onClick={() =>
                    setFilter({
                        all: true,
                        small: false,
                        large: false,
                    })
                }
                style={{
                    color: filter.all
                        ? "rgb(117, 156, 227)"
                        : "rgba(110, 110, 110, 0.819)",
                    width: filter.all ? "5em" : "2.5em",
                }}
            >
                <div>
                    <div
                        className="fleet-icon"
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <LiaCarSolid size={13} />
                        <LiaCarSolid size={13} />
                    </div>
                    <p>All</p>
                </div>
            </li>
            <li
                onClick={() =>
                    setFilter({
                        all: false,
                        small: true,
                        large: false,
                    })
                }
                style={{
                    color: filter.small
                        ? "rgb(117, 156, 227)"
                        : "rgba(110, 110, 110, 0.819)",
                    width: filter.small ? "6.5em" : "2.5em",
                }}
            >
                <div>
                    <TbCar size={25} />
                    <p>chicos</p>
                </div>
            </li>
            <li
                onClick={() =>
                    setFilter({
                        all: false,
                        small: false,
                        large: true,
                    })
                }
                style={{
                    color: filter.large
                        ? "rgb(117, 156, 227)"
                        : "rgba(110, 110, 110, 0.819)",
                    width: filter.large ? "8em" : "2.5em",
                }}
            >
                <div>
                    <TbCarSuv size={25} />
                    <p>grandes</p>
                </div>
            </li>
        </ul>
    );
};

export default Filters;
