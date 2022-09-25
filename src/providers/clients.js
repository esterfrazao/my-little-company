import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClientData, loginClient, signUpClient } from "../services/clients";
import { success } from "../utils/toast";

const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    sessionStorage.getItem("@MLCompany:token") || null
  );

  const [clientInfo, setClientInfo] = useState({});

  useEffect(() => {
    if (token !== "null" && token !== "undefined" && token !== null) {
      sessionStorage.setItem("@MLCompany:token", token);
      getClientData(token, setClientInfo);
    }
  }, [token]);

  const login = async (data) => {
    const response = await loginClient(data);

    if (response) {
      setToken(response);
      await getClientData(response, setClientInfo);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setClientInfo({});
    navigate("/");
    success("Logout realizado com sucesso!", null);
  };

  const register = async (data) => {
    await signUpClient(data);
  };

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
