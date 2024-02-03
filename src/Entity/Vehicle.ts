export interface Vehicle {
    make: string;         // Marca del vehículo
    model: string;        // Modelo del vehículo
    year: number;         // Año de fabricación
    color: string;        // Color del vehículo
    fuelType: string;     // Tipo de combustible (gasolina, diésel, híbrido, etc.)
    transmission: string; // Tipo de transmisión (automática, manual)
    passengerCapacity: number; // Capacidad de pasajeros
    doors: number;
    sport:boolean;
    dailyRate: number;    // Tarifa diaria de alquiler
    image: string;
    type: CarType;
    available: boolean;   // Disponibilidad actual
} 

export enum CarType {
    Small = "chico",
    Medium = "medianos",
    Large = "grandes",
}

export interface ElectricVehicle extends Vehicle {
    range: number; // Range in kilometers with a full charge
    batteryType: string; // Type of battery used
}