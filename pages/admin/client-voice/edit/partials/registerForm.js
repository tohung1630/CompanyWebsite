import * as yup from "yup";

export const registerSchema = yup.object().shape({
    title: yup
    .string()
    .max(100, "Title no more than 100 characters !")
    .required("Title  is required !")
    .min(2, "Mininum 2 characters"),

    desc: yup
    .string()
    .max(1000, "Description more than 1000 characters !")
    .required("Description  is required !")
    .min(2, "Mininum 2 characters"),

    company: yup
    .string()
    .max(100, " Company no more than 100 characters !")
    .required("Company  is required !")
    .min(2, "Mininum 2 characters"),
     
});
