import Providers from "./providers";
import Router from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "./utils/toast";

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </Providers>
  );
};

export default App;
