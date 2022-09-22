import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

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
        <FormControl key={i} isInvalid={errors[input.name]}>
          <FormLabel htmlFor="name">{input.title}</FormLabel>
          <Input
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
          colorScheme="teal"
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
