import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CustomInput } from "./styles";

const Form = ({ schema, fields, callback }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    callback(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields?.map((input, i) => (
        <FormControl key={i} marginBottom="15px" isInvalid={errors[input.name]}>
          <FormLabel color="whiteAlpha.800" htmlFor="name">
            {input.title}
          </FormLabel>
          <CustomInput
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            {...register(input.name)}
          />
          <FormErrorMessage>{errors[input.name]?.message}</FormErrorMessage>
        </FormControl>
      ))}
      <Flex justify="center">
        <Button
          mt={4}
          colorScheme="whiteAlpha"
          isLoading={isSubmitting}
          type="submit"
        >
          Enviar
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
