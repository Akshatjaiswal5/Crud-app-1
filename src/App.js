import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";
const INIT_DATA = [
  {
    key: "akj9apjrm2",
    name: "Akshat Jaiswal",
    contact: "7694000397",
  },
  {
    key: "7d0kat86o3",
    name: "Prasanna Vyas",
    contact: "9826527533",
  },
  {
    key: "lhlg9f8se4",
    name: "Suyash Patil",
    contact: "8785755578",
  },
  {
    key: "nl3ej2l56h",
    name: "Shashwat Thakur",
    contact: "8867566564",
  },
];

const App = () => {
  const [contactList, setContactList] = useState(INIT_DATA);
  const [currContact, setCurrContact] = useState({
    key: "",
    name: "",
    contact: "",
  });

  const addContact = (cnt) => {
    const newContact = {
      ...cnt,
      key: Math.random().toString(36).substring(2, 11),
    };
    setContactList((contactList) => [...contactList, newContact]);
  };
  const editContact = (cnt) => {
    setCurrContact({
      key: cnt.key,
      name: cnt.name,
      contact: cnt.contact,
    });
  };
  const updateContact = (cnt) => {
    setContactList((contactList) => {
      return contactList.map((contact) => {
        if (contact.key === cnt.key) return cnt;
        else return contact;
      });
    });
    setCurrContact({
      key: "",
      name: "",
      contact: "",
    });
  };
  const deleteContact = (cnt) => {
    setContactList((contactList) => {
      return contactList.filter((contact) => {
        return contact.key !== cnt.key;
      });
    });
  };

  return (
    <>
      <div className="left-panel">
        {contactList.map((contact) => {
          return (
            <Card
              key={contact.key}
              contact={contact}
              editContact={editContact}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>
      <div className="right-panel">
        <Form
          currContact={currContact}
          onFinish={currContact.key !== "" ? updateContact : addContact}
        />
      </div>
    </>
  );
};

export default App;
