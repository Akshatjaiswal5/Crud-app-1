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
  const [editingMode, setEditingMode] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (cnt) => {
    setContactList((contactList) => [...contactList, cnt]);
  };
  const editContact = (cnt) => {
    setContactList((contactList) => {
      return contactList.map((contact) => {
        if (contact.key === cnt.key) return cnt;
        else return contact;
      });
    });
    setEditingContact(null);
    setEditingMode(false);
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
              setEditingMode={setEditingMode}
              setEditingContact={setEditingContact}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>
      <div className="right-panel">
        <Form
          editingMode={editingMode}
          editingContact={editingContact}
          onFinish={editingMode ? editContact : addContact}
        />
      </div>
    </>
  );
};

export default App;
