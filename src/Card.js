import React from "react";
import "./Card.css";

const Card = (
  { contact, setEditingMode, setEditingContact, deleteContact },
  key
) => {
  return (
    <div className="card" key={key}>
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button
        onClick={(e) => {
          setEditingMode(true);
          setEditingContact(contact);
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
