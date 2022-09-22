import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email Inválido").required("Campo Obrigatório"),
  password: yup.string().required("Campo Obrigatório"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("Email Inválido").required("Campo Obrigatório"),
  password: yup.string().required("Campo Obrigatório"),
  phone_number: yup
    .string()
    .required("Campo Obrigatório")
    .max(15, "Número muito longo"),
});
