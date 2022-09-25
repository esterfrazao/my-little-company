import { createContext, useContext, useEffect, useState } from "react";
import {
  listContacts,
  createContact,
  deleteContact,
} from "../services/contacts";
import { useAuth } from "./clients";

export const ContactsContext = createContext([]);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token !== "null" && token !== "undefined" && token !== null)
      listContacts(token, setContacts);
  }, [token]);

  const addContact = (newContact) => {
    createContact(token, newContact);
    listContacts(token, setContacts);
  };

  const removeContact = async (contactId) => {
    await deleteContact(token, contactId);
    listContacts(token, setContacts);
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
        removeContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
