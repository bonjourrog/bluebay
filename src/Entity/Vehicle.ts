export interface Vehicle {
    id:string;
    make: string;         // Marca del vehículo
    model: string;        // Modelo del vehículo
    year: number;         // Año de fabricación
    color: string;        // Color del vehículo
    fuel_type: string;     // Tipo de combustible (gasolina, diésel, híbrido, etc.)
    transmission: string; // Tipo de transmisión (automática, manual)
    passenger_capacity: number; // Capacidad de pasajeros
    doors: number;
    sport:boolean;
    daily_rate: number;    // Tarifa diaria de alquiler
    image: string;
    type: CarType;
    available: boolean;   // Disponibilidad actual
    steering_wheel_controls:boolean;
    anti_glare_tint: boolean;
    auto_stick: boolean;
    amount: number;
    deposit:number;
    license: string;
    touch_screen:boolean;
    images:string[];
    reverse_camera:boolean;

} 

export enum CarType {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export interface ElectricVehicle extends Vehicle {
    range: number; // Range in kilometers with a full charge
    batteryType: string; // Type of battery used
}