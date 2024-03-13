import { useContext } from 'react';
import { VehicleContext } from '../../Context/Vehicle';
import './Dialog.css';
import { DialogProps } from './Dialog.props';
import { CiHeadphones } from "react-icons/ci";

const Dialog: React.FC<DialogProps> = ()=>{
    const {setShowDialog} = useContext(VehicleContext)
    return <div className='dialog'>
        <p className='dialog__headline'>Gracias por agendar en Blue Bay Car Rental ✨</p>
        <p className='dialog__subheadline'>
        <CiHeadphones size={50}/>Enseguida nos comunicaremos con usted para confirmar su reservación</p>
        <button onClick={()=>setShowDialog(false)} className='dialog__close-btn'>Aceptar</button>
    </div>
}

export default Dialog;