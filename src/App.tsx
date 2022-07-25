import React, { useState } from "react";
import "./App.css";
import ContactCard from "./ContactCard";
import Form from "./Form";
import Contact from "./Contact";
import theme from "./Theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

const INIT_DATA: Contact[] = [
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
  const [contactList, setContactList] = useState<Contact[]>(INIT_DATA);
  const [currContact, setCurrContact] = useState<Contact>({
    key: "",
    name: "",
    contact: "",
  });

  const addContact = (cnt: Contact) => {
    const newContact: Contact = {
      ...cnt,
      key: Math.random().toString(36).substring(2, 11),
    };
    setContactList((contactList) => [...contactList, newContact]);
  };
  const editContact = (cnt: Contact) => {
    setCurrContact({
      ...cnt,
    });
  };
  const updateContact = (cnt: Contact) => {
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
  const deleteContact = (cnt: Contact) => {
    setContactList((contactList) => {
      return contactList.filter((contact) => {
        return contact.key !== cnt.key;
      });
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="left-panel">
        {contactList.map((contact) => {
          return (
            <ContactCard
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
    </ThemeProvider>
  );
};

export default App;
