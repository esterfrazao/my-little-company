import Router from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "./utils/toast";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </div>
  );
};

export default App;
