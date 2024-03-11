import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
    from_name: Yup.string().min(3, "Mínimo 5 caracteres").max(255, "Maximo 255 caracteres").required(),
    replay_to: Yup.string().required("Campo requerido").email("Correo no valido").max(255, "Maximo 255 caracteres"),
    message: Yup.string().required().min(10, "Mínimo 10 caracteres").max(500, "maximo 500 caracteres")
})