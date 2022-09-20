import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields?.map((input, i) => (
        <FormControl key={i} isInvalid={errors[input.name]}>
          <FormLabel htmlFor="name">{input.title}</FormLabel>
          <Input
            id={input.id}
            placeholder={input.placeholder}
            {...register(input.name)}
          />
          <FormErrorMessage>{errors[input.name]?.message}</FormErrorMessage>
        </FormControl>
      ))}
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default Form;
