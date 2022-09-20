import Form from "../../components/Form";
import { loginSchema } from "../../schemas/yupSchemas";

const Login = () => {
  const fields = [
    {
      id: "email",
      name: "email",
      title: "Email",
      placeholder: "Insira seu email",
    },
    {
      id: "password",
      name: "password",
      title: "Senha",
      placeholder: "Insira sua senha",
    },
  ];

  return (
    <>
      <Form schema={loginSchema} fields={fields} />
    </>
  );
};

export default Login;
