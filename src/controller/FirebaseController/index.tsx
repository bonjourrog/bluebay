import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../db/firebase';
import { Vehicle } from '../../Entity/Vehicle';


const getVehicles = async():Promise<Vehicle[]>=>{
  const vehicles: Vehicle[] = [];
    const querySnapshot = await getDocs(collection(db, 'vehicles'));
    querySnapshot.forEach(elem=>{
      let vehicle:Vehicle = elem.data() as Vehicle;
      vehicles.push(vehicle);
    })
    return vehicles;
    
}
export const FirebaseService = {
  getVehicles
}