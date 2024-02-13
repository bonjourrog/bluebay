import { createContext, useState } from "react";
import { Vehicle } from "../../Entity/Vehicle";
import { ContextValue, VehicleProviderProps } from "./VehiclesProps";

export const VehicleContext = createContext<ContextValue>({} as ContextValue);

export const VehicleProvider: React.FC<VehicleProviderProps> = ({
    children,
}) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
    const [vehicleToShow, setVehicleToShow] = useState<Vehicle>({} as Vehicle);
    return (
        <VehicleContext.Provider
            value={{
                vehicles,
                setVehicles,
                isDetailsOpen,
                setIsDetailsOpen,
                vehicleToShow,
                setVehicleToShow,
            }}
        >
            {children}
        </VehicleContext.Provider>
    );
};
