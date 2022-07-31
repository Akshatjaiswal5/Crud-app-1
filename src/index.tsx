import ReactDOM from "react-dom/client";
import { StoreProvider } from "easy-peasy";
import ContactStore from "./store";
import "./index.css";
import "bulma/css/bulma.min.css";
import App from "./App";
import React from "react";

const StoreProviderCasted = StoreProvider as unknown as React.FC<
  React.PropsWithChildren & StoreProvider["props"]
>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StoreProviderCasted store={ContactStore}>
    <App />
  </StoreProviderCasted>
);
