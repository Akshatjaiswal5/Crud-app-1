import React from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";
import { Contact, ContactState } from "./ContactTypes";
import { useSelector } from "react-redux";

const App = () => {
  const contactList = useSelector<ContactState, Contact[]>(
    (state) => state.contactList
  );

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
