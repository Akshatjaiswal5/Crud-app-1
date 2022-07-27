import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import ContactStore from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <StoreProvider store={ContactStore}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
