import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Stack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const Form = ({ schema, fields }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    return alert(JSON.stringify(data, null, 2));
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields?.map((input, i) => (
                <FormControl key={i} isInvalid={errors[input.name]}>
                  <FormLabel htmlFor="name">{input.title}</FormLabel>
                  <Input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                  />
                  <FormErrorMessage>
                    {errors[input.name]?.message}
                  </FormErrorMessage>
                </FormControl>
              ))}
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Form;
