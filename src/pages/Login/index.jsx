import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

import Form from "../../components/Form";
import { useAuth } from "../../providers/clients";
import { loginSchema } from "../../schemas/yupSchemas";

const Login = ({ authenticated }) => {
  const { login } = useAuth();
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

  if (authenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="var(--dark-blue)"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Login
        </Heading>
        <Box rounded={"lg"} bg="gray.700" boxShadow={"lg"} p={8}>
          <Form schema={loginSchema} fields={fields} callback={login} />
          <Stack pt={6}>
            <Text align={"center"}>
              Não possui uma conta ainda?
              <span style={{ color: "var(--light-blue)" }}>
                <Link to="/register">Cadastre-se</Link>
              </span>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
