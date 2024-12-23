import { createContext, useState } from "react";
import { Vehicle } from "../../Entity/Vehicle";
import { Contract } from "../../Entity/Contract";
import { ContextValue, VehicleProviderProps } from "./VehiclesProps";
import dayjs, {Dayjs} from 'dayjs';

export const VehicleContext = createContext<ContextValue>({} as ContextValue);

export const VehicleProvider: React.FC<VehicleProviderProps> = ({
    children,
}) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
    const [vehicleToShow, setVehicleToShow] = useState<Vehicle>({} as Vehicle);
    const [currentTime, setCurrentTime] = useState<any>(null)
    const [showContractForm, setShowContractForm] = useState<boolean>(false)
    const [contract, setContract] = useState<Contract>({} as Contract);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Dayjs>(dayjs(new Date()));
    const [endDate, setEndDate] = useState<Dayjs>(dayjs(new Date().getTime()+86400000));

    return (
        <VehicleContext.Provider
            value={{
                vehicles,
                setVehicles,
                isDetailsOpen,
                setIsDetailsOpen,
                vehicleToShow,
                setVehicleToShow,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                currentTime,
                setCurrentTime,
                showContractForm,
                setShowContractForm,
                contract,
                setContract,
                showDialog, 
                setShowDialog
            }}
        >
            {children}
        </VehicleContext.Provider>
    );
};
