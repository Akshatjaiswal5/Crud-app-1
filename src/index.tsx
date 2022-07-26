import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ContactStore from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={ContactStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
