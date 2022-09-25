import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  IconButton,
} from "@chakra-ui/react";

const PopoverButton = ({ icon, id, callback }) => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <IconButton icon={icon} />
      </PopoverTrigger>
      <PopoverContent
        color="white"
        bg="var(--medium-blue3)"
        borderColor="blue.800"
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Deseja mesmo excluir esse contato?
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          pb={4}
        >
          <Button id={id} onClick={callback} colorScheme="purple">
            Confirmar
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverButton;
