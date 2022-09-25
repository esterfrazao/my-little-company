import {
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
import { IoIosTrash } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { useContacts } from "../../providers/contacts";
import CustomModal from "../../components/Modal";
import { createContactSchema } from "../../schemas/yupSchemas";
import { useState } from "react";
import PopoverButton from "../../components/PopOverButton";

const Dashboard = ({ authenticated }) => {
  const { contacts, addContact } = useContacts();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contactId, setContactId] = useState(0);

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

  const handleContact = (e) => {
    setContactId(e.target.id);
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
      <Spacer />
      <Flex
        padding="15px"
        width="85%"
        direction="column"
        justify="space-around"
        shadow="0 0 40px 0 var(--medium-blue3)"
      >
        <Flex>
          <Spacer />
          <Button onClick={onOpen}>Adicionar contato</Button>
        </Flex>
        {contacts.length === 0 ? (
          <Text color="whiteAlpha.800">Adicione contatos à sua lista!!</Text>
        ) : (
          <List marginTop="10px" spacing={5}>
            {contacts.map((person, index) => (
              <ListItem display="flex" key={index}>
                <ListIcon as={RiContactsFill} color="whiteAlpha.600" />
                <Flex direction="column">
                  <Text fontWeight="bold" color="whiteAlpha.800">
                    {person.name}
                  </Text>
                  <Text color="whiteAlpha.800">{person?.email}</Text>
                  <Text color="whiteAlpha.800">{person?.phone_number}</Text>
                </Flex>
                <Spacer />
                <PopoverButton
                  onClick={handleContact}
                  id={person.id}
                  icon={<IoIosTrash />}
                  callback={(e) => console.log(e.target.id)}
                />
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
      <Spacer />
    </Flex>
  );
};

export default Dashboard;
