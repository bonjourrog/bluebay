import { ReactNode, SetStateAction } from "react";
import { Vehicle } from "../../Entity/Vehicle";
import { Dayjs } from "dayjs";

export interface VehicleProviderProps {
    children: ReactNode;
}

export interface ContextValue {
    vehicles: Vehicle[];
    setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
    isDetailsOpen: boolean;
    setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    vehicleToShow: Vehicle;
    setVehicleToShow: React.Dispatch<React.SetStateAction<Vehicle>>;
    startDate: Dayjs;
    setStartDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    endDate: Dayjs;
    setEndDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    currentTime: any;
    setCurrentTime: React.Dispatch<SetStateAction<any>>;
}
