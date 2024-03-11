import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
    full_name: Yup.string().min(3, "* Minimo 5 caracteres").required('* Campo obligatorio'),
    birth_day: Yup.date().required("* Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("* Campo obligatorio"),
    city: Yup.string().required('* Campo obligatorio'),
    state: Yup.string().required('* Campo obligatorio'),
    zip_code: Yup.string().required('* Campo obligatorio'),
    country: Yup.string().required('* Campo obligatorio'),
    passport: Yup.string().required('* Campo obligatorio'),
    license: Yup.string().required('* Campo obligatorio'),
    expired_date: Yup.date().required('* Campo obligatorio')
})