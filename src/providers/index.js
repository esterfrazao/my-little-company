import { ClientProvider } from "./clients";
import { ContactsProvider } from "./contacts";

const Providers = ({ children }) => {
  return (
    <ClientProvider>
      <ContactsProvider>{children}</ContactsProvider>
    </ClientProvider>
  );
};

export default Providers;
