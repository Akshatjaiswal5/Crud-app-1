import React from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";
import { useStoreState } from "./store/hooks";

const App = () => {
  const contactList = useStoreState((state) => state.contactList);

  return (
    <>
      <div className="left-panel">
        {contactList.map((contact) => {
          return <Card key={contact.key} contact={contact} />;
        })}
      </div>
      <div className="right-panel">
        <Form />
      </div>
    </>
  );
};

export default App;
