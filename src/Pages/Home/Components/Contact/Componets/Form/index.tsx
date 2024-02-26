import './Form.css';
import { useFormik } from 'formik';
import { ContactFormSchema } from './Form.schema';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const ContactForm = ()=>{

    const formMessageRef = useRef<HTMLDivElement | null>(null)

    const handleCloseFormMessage = (open: boolean) =>{
        const emailSendMessage =  formMessageRef.current;
        if(emailSendMessage){
            open ? emailSendMessage.style.display = "flex": emailSendMessage.style.display = "none";
        }
    }

    const formik = useFormik({
        initialValues:{
            from_name:"",
            to_name:"Blue Bay Car Rental",
            subject:"Solicitud de información sobre Blue Bay",
            replay_to:"",
            message:""
        },
        validationSchema:ContactFormSchema,
        onSubmit:(values)=>{
            emailjs.send(import.meta.env.VITE_FORMIK_SERVICE_ID,import.meta.env.VITE_FORMIK_TEMPLATE_ID, 
                values, import.meta.env.VITE_FORMIK_PUBLIC_KEY)
                .then(() => {
                    handleCloseFormMessage(true);
            }).catch(e=>{
            });
        }
    });
    return <form onSubmit={formik.handleSubmit} className="form">
                <div style={{position:"absolute",top:"1em", left:"50%", width:"12em", transform:"translateX(-50%)", zIndex:"10005",padding:"1em", borderRadius:".3em", backgroundColor:"rgb(80, 191, 106)", display:"none", alignItems:"center", justifyContent:"space-between"}} ref={formMessageRef}>
                    <p style={{display:"block"}}>Mesaje Enviado</p>
                    <IoCloseOutline onClick={()=>handleCloseFormMessage(false)} style={{fontSize:"1.4em", cursor:"pointer"}}/>
                </div>
                <div className="form__header">
                    <h3 className="business-name">BLUE BAY</h3>
                    <p className="business-city">Puerto Peñasco</p>
                </div>
                <label htmlFor="from_name">
                    <p>Nombre</p>
                    <input id="from_name" name='from_name' type="name" onChange={formik.handleChange} value={formik.values.from_name}/>
                    <div className={`expandable ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`}>
                        {formik.errors.from_name}
                    </div>
                </label>
                <label htmlFor="reply_to">
                    <p>Correo</p>
                    <input id="replay_to" name="replay_to" type="email" onChange={formik.handleChange} value={formik.values.replay_to}  />
                    <div className={`expandable ${formik.touched.replay_to && formik.errors.replay_to ? 'show' : ''}`}>
                        {formik.errors.replay_to}
                    </div>
                </label>
                <label htmlFor="message">
                    <p>Mensaje</p>
                    <textarea rows={7} name="message" id="message" onChange={formik.handleChange} value={formik.values.message}></textarea>
                    <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                        {formik.errors.message}
                    </div>
                </label>
                <button disabled={formik.isSubmitting} type='submit'>Send</button>
            </form>
}
export default ContactForm;