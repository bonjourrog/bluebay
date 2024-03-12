import './Contract.css';
import { Steps } from 'antd';
import { ContractProps } from './Contrac.props';
import { useContext, useEffect, useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { VehicleContext } from '../../Context/Vehicle';
import { useFormik } from 'formik';
import { ContactSchema } from './Contract.schema';
import emailjs from '@emailjs/browser';

const Contract: React.FC<ContractProps> = ()=>{
    const [current, setCurrent] = useState<number>(0);
    const {showContractForm, setShowContractForm, vehicleToShow, startDate, endDate} = useContext(VehicleContext);
    const [message, setMessage] = useState<any>({});
    const [appWidth, setAppWidth] = useState(0)
    const steps = [
        {
            title: 'Datos personal',
            description:"Ingresa tus datos personales",
        },
        {
            title: 'Dirección',
            description:"Agrega tu dirección",
        },
        {
            title: 'Licencia',
            description:"Información de tu licensia",
        },
        {
            title: 'Temrinado',
            description:"Verifique la información",
            icon: <SmileOutlined/>
        },

    ];

    const formik = useFormik({
        initialValues:{
            full_name: "",
            birth_day:"",
            phone: "",
            address:"",
            city:"",
            state:"",
            zip_code:"",
            country:"",
            passport:"",
            license:"",
            expired_date:"",
            from_name:"",
            to_name:"Blue Bay Car Rental",
            subject:"Solicitud de Contrato",
            replay_to:"",
            message:"",
        },
        validationSchema:ContactSchema,
        onSubmit:(values, {setSubmitting, resetForm})=>{
            values.from_name = values.full_name;
            values.message = `
                Nombre: ${values.full_name}
                Fecha de nacimiento: ${values.birth_day}
                Telefono: ${values.phone}
                Dirección: ${values.address}
                Ciudad: ${values.city}
                Estado: ${values.state}
                Codigo Postal: ${values.zip_code}
                País: ${values.country}
                INE: ${values.passport}
                Licensia: ${values.license}
                Fecha de expiración: ${values.expired_date}
            `;
            
            emailjs.send(import.meta.env.VITE_FORMIK_SERVICE_ID,import.meta.env.VITE_FORMIK_SECOND_TEMPLTE_ID, 
                values, import.meta.env.VITE_FORMIK_PUBLIC_KEY)
                .then(() => {
                    setSubmitting(false);
                    resetForm();
                    setCurrent(0);
            }).catch(_=>{
                console.log("error sending image, look contact component");
                setSubmitting(false);
                
            });
        }
    });
    const handleInputs = (e:React.ChangeEvent<any>)=>{
        formik.handleChange(e);
            setMessage(formik.values);
    }

    const handleWidth = ()=>{
        setAppWidth(window.innerWidth)
    }

    useEffect(()=>{
        setCurrent(0)
    }, [])

    useEffect(()=>{
        window.addEventListener('resize', handleWidth)
        return ()=>{
            window.removeEventListener('resize', handleWidth)
        }
    } ,[appWidth])

    return <section
        className={`contract ${showContractForm ? 'contract--show' : 'contract--hide'}`}>
        <Steps
            className='contract__steps'
            direction={`${appWidth>800 ? 'vertical' : 'horizontal'}`}
            current={current}
            onChange={(val)=>setCurrent(val)}
            items={steps}
            size='small'
        >
        </Steps>
        <section className='forms'>
            <form onSubmit={formik.handleSubmit}>
                {
                    current === 0 && (
                        <>
                            <label htmlFor="full_name">
                                Nombre Completo
                                <input type="text" name="full_name" id="full_name" onChange={(e)=>handleInputs(e)} value={formik.values.full_name} />
                                <div className={`input-message ${formik.touched.full_name && formik.errors.full_name}`}>{formik.errors.full_name}</div>
                            </label>
                            <label htmlFor="birth_day">
                                Fecha de nacimiento
                                <input type="date" name='birth_day' id='birth_day' onChange={formik.handleChange} value={formik.values.birth_day}/>
                                <div className={`input-message ${formik.touched.birth_day && formik.errors.birth_day}`}>{formik.errors.birth_day}</div>
                            </label>
                            <label htmlFor="phone">
                                Telefono
                                <input type="text" name='phone' id='phone' onChange={(e)=>handleInputs(e)} value={formik.values.phone}/>
                                <div className={`input-message ${formik.touched.phone && formik.errors.phone}`}>{formik.errors.phone}</div>
                            </label>
                        </>
                    )
                }
                {
                    current === 1 && (
                        <>
                            <label htmlFor="address">
                                Dirección
                                <input type="text" name="address" id="address" onChange={(e)=>handleInputs(e)} value={formik.values.address}/>
                                <div className={`input-message ${formik.touched.address && formik.errors.address}`}>{formik.errors.address}</div>
                            </label>
                            <label htmlFor="city">
                                Ciudad
                                <input type="text" name='city' id='city' onChange={(e)=>handleInputs(e)} value={formik.values.city}/>
                                <div className={`input-message ${formik.touched.city && formik.errors.city}`}>{formik.errors.city}</div>
                            </label>
                            <label htmlFor="state">
                                Estado
                                <input type="text" name='state' id='state' onChange={(e)=>handleInputs(e)} value={formik.values.state}/>
                                <div className={`input-message ${formik.touched.state && formik.errors.state}`}>{formik.errors.state}</div>
                            </label>
                            <label htmlFor="zip_code">
                                CP
                                <input type="text" name='zip_code' id='zip_code' onChange={(e)=>formik.handleChange(e)} value={formik.values.zip_code}/>
                                <div className={`input-message ${formik.touched.zip_code && formik.errors.zip_code}`}>{formik.errors.zip_code}</div>
                            </label>
                            <label htmlFor="country">
                                País
                                <input type="text" name='country' id='country' onChange={(e)=>handleInputs(e)} value={formik.values.country}/>
                                <div className={`input-message ${formik.touched.country && formik.errors.country}`}>{formik.errors.country}</div>
                            </label>
                        </>
                    )
                }
                {
                    current === 2 && (
                        <>
                            <label htmlFor="">
                                INE/Pasaporte
                                <input type="text" name="passport" id="passport" onChange={(e)=>handleInputs(e)} value={formik.values.passport}/>
                                <div className={`input-message ${formik.touched.passport && formik.errors.passport}`}>{formik.errors.passport}</div>
                            </label>
                            <label htmlFor="">
                                No. Licencia
                                <input type="text" name='license' id='license' onChange={(e)=>handleInputs(e)} value={formik.values.license}/>
                                <div className={`input-message ${formik.touched.license && formik.errors.license}`}>{formik.errors.license}</div>
                            </label>
                            <label htmlFor="">
                                Vencimiento
                                <input type="text" name='expired_date' id='expired_date' onChange={(e)=>handleInputs(e)} value={formik.values.expired_date}/>
                                <div className={`input-message ${formik.touched.expired_date && formik.errors.expired_date}`}>{formik.errors.expired_date}</div>
                            </label>
                        </>
                    )
                }
                {
                    current === 3 && (
                        <div>
                            <h2>Verifique su información</h2>
                            <br />
                            <strong>{vehicleToShow.make} {vehicleToShow.model}</strong>
                            <br />
                            <small style={{fontWeight:"bold", fontStyle:"italic"}}>{startDate.get('date')}/{startDate.get('month')} - {endDate.get('date')}/{endDate.get('month')}</small>
                            <div style={{display:"flex", flexWrap:"wrap", marginTop:"1em"}}>
                                {
                                    Object.keys(message).map((el:string)=>
                                        (el==="subject" || el === "to_name")?undefined : (
                                            <p style={{width:"50%", marginTop:".5em", color:"gray", fontStyle:"italic"}}>{message[el]}</p>
                                        ))
                                }
                            </div>
                        </div>
                    )
                }
                <div className='btns'>
                {
                    current < steps.length-1 && (<button className='steps-btn steps-btn--primary' onClick={()=>setCurrent(prevVal => prevVal = prevVal+1)}>Siguiente</button>)
                }
                {
                    current === steps.length -1 && (<button disabled={formik.isSubmitting} type='submit' className='steps-btn steps-btn--done'>Reservar</button>)
                }
                {
                    current > 0 && (<button className='steps-btn' onClick={()=>setCurrent(prevVal => prevVal = prevVal-1)}>Atras</button>)
                }
                <button  onClick={()=>setShowContractForm(false)} className='steps-btn steps-btn--cancel'>Cancelar</button>
            </div>
            </form>
        </section>
    </section>
}

export default Contract;