import React from "react";
import "./Card.css";

const Card = ({ contact, editContact, deleteContact }, key) => {
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
