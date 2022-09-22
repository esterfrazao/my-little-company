import { ClientProvider } from "./clients";

const Providers = ({ children }) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default Providers;
