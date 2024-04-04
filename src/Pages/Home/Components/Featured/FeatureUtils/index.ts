import { Vehicle } from "../../../../../Entity/Vehicle"

export const filterModelVehicles = (array:Vehicle[])=>{
    let newArray: Vehicle[] = [];
    const myMap:{[key:string]:boolean} = {};
    array.map(elem=>{
        if(!myMap[elem.model]){
            myMap[elem.model] = true;
            newArray.push(elem);
        }
    });
    return newArray;
} 