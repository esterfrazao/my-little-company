import api from ".";
import { success, error } from "../utils/toast";

export const loginClient = async (data) => {
  const response = await api
    .post("/login", data)
    .then((res) => {
      sessionStorage.setItem("@MLCompany:token", res.data.token);

      success("Login realizado com sucesso!", null);
      return res.data.token;
    })
    .catch((err) => {
      error(err);

      return false;
    });

  return response;
};

export const signUpClient = async (data) => {
  const response = await api
    .post("/clients/register", data)
    .then(() => {
      success(
        "Cadastro realizado com sucesso!",
        "Uma conta nova foi criada pra você!"
      );
      return true;
    })
    .catch((err) => {
      error(err);

      return false;
    });

  return response;
};

export const getClientData = async (token, setUserInfo) => {
  const response = await api
    .get(`/clients/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setUserInfo(res.data);
      return res.data;
    });
  return response;
};

export const patchClientData = async (data, id, token, setUserInfos) => {
  const response = await api
    .patch(`/clients/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      success("Dados atualizados com sucesso", null);
      setUserInfos(res.data);
      return true;
    })
    .catch((err) => {
      error(err);
      return false;
    });

  return response;
};
