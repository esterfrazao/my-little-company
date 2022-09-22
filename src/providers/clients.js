import { createContext, useContext, useEffect, useState } from "react";
import { getClientData, loginClient, signUpClient } from "../services/clients";
import { success } from "../utils/toast";

const ClientContext = createContext({});

export const ClientProvidert = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@MLCompany:token") || null
  );

  const [clientInfo, setClientInfo] = useState({});

  useEffect(() => {
    if (token) {
      localStorage.setItem("@MLCompany:token", token);
      getClientData(token, setClientInfo);
    }
  }, [token]);

  const login = async (data) => {
    const response = await loginClient(data);
    const accessToken = localStorage.getItem("@MLCompany:token");
    setToken(accessToken);

    if (response) {
      await getClientData(accessToken, setClientInfo);
    }
  };

  const logout = () => {
    localStorage.removeItem("@MLCompany:token");
    success("Logout realizado com sucesso!", null);
    setToken(null);
    setClientInfo({});
  };

  const register = async (data) => {
    await signUpClient(data);
  };

  // const changeClientInfos = async (
  //   newData,
  //   toastSucessMessage,
  //   toastErrorMessage
  // ) => {
  //   const updateUserInfos = await patchUserData(
  //     newData,
  //     id,
  //     token,
  //     toastSucessMessage,
  //     toastErrorMessage,
  //     setUserInfos
  //   );
  //   if (updateUserInfos) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <ClientContext.Provider
      value={{
        token,
        clientInfo,
        login,
        register,
        logout,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useAuth = () => useContext(ClientContext);