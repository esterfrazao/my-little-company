import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer, toast } = createStandaloneToast();

const success = (title, message) => {
  toast({
    title: title,
    description: message,
    status: "success",
    isClosable: true,
    duration: 1500,
  });
};

const error = (message) => {
  toast({
    title: "Falha!",
    description: message,
    status: "error",
    isClosable: true,
    duration: 1500,
  });
};

export { ToastContainer, success, error };
