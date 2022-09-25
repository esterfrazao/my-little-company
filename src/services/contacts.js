import api from ".";
import { success, error } from "../utils/toast";

export const createContact = async (token, data) => {
  const response = await api
    .post("/contacts", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      success(
        "Criação realizada com sucesso!",
        "Um novo contato foi adicionado na sua agenda!"
      );
      return res.data;
    })
    .catch((err) => {
      error(err);

      return false;
    });

  return response;
};

export const listContacts = async (token, setContacts) => {
  const response = await api
    .get("/contacts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setContacts(res.data);
      return res.data;
    });
  return response;
};

export const deleteContact = async (token, contactId) => {
  const response = await api
    .delete(`contacts/${contactId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      success("Contato Excluído com sucesso", null);
      return true;
    })
    .catch((err) => {
      error(err);
      return false;
    });

  return response;
};
