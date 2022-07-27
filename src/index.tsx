import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import ContactStore from "./store";
import "./index.css";
import App from "./App";
import React from "react";

const StoreProviderCasted = StoreProvider as unknown as React.FC<
  React.PropsWithChildren & StoreProvider["props"]
>;

ReactDOM.render(
  <StoreProviderCasted store={ContactStore}>
    <App />
  </StoreProviderCasted>,
  document.getElementById("root")
);
