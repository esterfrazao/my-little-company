import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email Inválido").required("Campo Obrigatório"),
  password: yup.string().required("Campo Obrigatório"),
});
