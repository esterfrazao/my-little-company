import { createContext, useContext, useEffect, useState } from "react";
import { listContacts, createContact } from "../services/contacts";
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

  //   const editCategory = (categoryToBeEdited, editedCategory) => {
  //     if (categories.includes(categoryToBeEdited)) {
  //       const updatedCategories = categories.map((category) => {
  //         if (category === categoryToBeEdited) {
  //           category = editCategory;
  //         }
  //         return category;
  //       });
  //       setCategories(updatedCategories);
  //       toast.success("Categoria editada com sucesso!");
  //     } else {
  //       toast.error("Categoria inexistente!");
  //     }
  //   };

  //   const removeCategory = (categoryToBeRemoved) => {
  //     if (categories.includes(categoryToBeRemoved)) {
  //       const updatedCategories = categories.filter(
  //         (category) => category !== categoryToBeRemoved
  //       );
  //       setCategories(updatedCategories);
  //       toast.success("Categoria removida com sucesso!");
  //     } else {
  //       toast.error("Categoria inexistente!");
  //     }
  //   };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
