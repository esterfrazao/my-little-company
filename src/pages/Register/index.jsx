import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { useAuth } from "../../providers/clients";
import { registerSchema } from "../../schemas/yupSchemas";

const Register = () => {
  const { register } = useAuth();

  const fields = [
    {
      id: "name",
      name: "name",
      title: "Nome Completo",
      type: "text",
      placeholder: "Insira seu nome completo",
    },
    {
      id: "phoneNumber",
      name: "phone_number",
      title: "Número de Telefone",
      type: "text",
      placeholder: "(86) 99999-9999",
    },
    {
      id: "email",
      name: "email",
      title: "Email",
      type: "email",
      placeholder: "Insira seu email",
    },
    {
      id: "password",
      name: "password",
      title: "Senha",
      type: "password",
      placeholder: "Insira sua senha",
    },
  ];

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Cadastro
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <Form schema={registerSchema} fields={fields} callback={register} />
          <Stack pt={6}>
            <Text align={"center"}>
              Já possui uma conta?
              <Text color="var(--light-blue)">
                <Link to="/">Faça Login</Link>
              </Text>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
