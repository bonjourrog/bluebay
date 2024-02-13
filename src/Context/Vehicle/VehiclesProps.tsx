import { ReactNode } from "react";
import { Vehicle } from "../../Entity/Vehicle";

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
}
