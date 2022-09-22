import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import Form from "../../components/Form";
import { loginSchema } from "../../schemas/yupSchemas";

const Login = () => {
  const fields = [
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Login
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Form schema={loginSchema} fields={fields} />
          <Stack pt={6}>
            <Text align={"center"}>
              Não possui uma conta ainda?
              <Link color="var(--light-blue)">
                <NavLink to="/register">Cadastre-se</NavLink>
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
