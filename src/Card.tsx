import React from "react";
import "./Card.css";

type Contact = {
  key: string;
  name: string;
  contact: string;
};

type ContactCRUDHandler = (cnt: Contact) => void;

const Card = (
  {
    contact,
    editContact,
    deleteContact,
  }: {
    contact: Contact;
    editContact: ContactCRUDHandler;
    deleteContact: ContactCRUDHandler;
  },
  key: string
) => {
  return (
    <div className="card" key={key}>
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button
        onClick={(e) => {
          editContact(contact);
        }}
      >
        Edit
      </button>
      <button
        onClick={(e) => {
          deleteContact(contact);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
