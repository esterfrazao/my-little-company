import {
  Box,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import { IoMdContact } from "react-icons/io";
import { useContacts } from "../../providers/contacts";
import CustomModal from "../../components/Modal";
import { createContactSchema } from "../../schemas/yupSchemas";

const Dashboard = ({ authenticated }) => {
  const { contacts, addContact } = useContacts();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = {
    fields: [
      {
        id: "name",
        title: "Nome",
        type: "text",
        name: "name",
        placeholder: "Nome do Contato",
      },
      {
        id: "email",
        title: "Email",
        type: "email",
        name: "email",
        placeholder: "Email do Contato",
      },
      {
        id: "phoneNumber",
        title: "Número de telefone",
        type: "text",
        name: "phone_number",
        placeholder: "(86) 99999-9999",
      },
    ],
    schema: createContactSchema,
    callback: addContact,
  };
  if (!authenticated) {
    return <Navigate replace to="/" />;
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      direction="column"
      justify="space-between"
      bg="var(--dark-blue)"
    >
      <Header />
      <Flex
        direction="column"
        justify="space-around"
        shadow="10px 10px 10px var(--medium-blue2)"
      >
        <Flex>
          <Spacer />
          <Button onClick={onOpen}>Adicionar contato</Button>
        </Flex>
        {contacts.length === 0 ? (
          <Text>Adicione contatos à sua lista!!</Text>
        ) : (
          <List spacing={3}>
            {contacts.map((person, index) => (
              <ListItem key={index}>
                <ListIcon as={IoMdContact} color="whiteAlpha.500" />
                {person.name}
              </ListItem>
            ))}
          </List>
        )}
      </Flex>
      <CustomModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        form={form}
      />
    </Flex>
  );
};

export default Dashboard;
