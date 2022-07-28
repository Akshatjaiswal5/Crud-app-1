import React from "react";
import "./Card.css";
import { Contact } from "../ContactTypes";
import { useStoreActions } from "../store/hooks";
import { useNavigate } from "react-router-dom";
const Card = ({ contact }: { contact: Contact }, key: string) => {
  const deleteContact = useStoreActions((actions) => actions.deleteContact);
  const editContact = useStoreActions((actions) => actions.editContact);
  const navigate = useNavigate();

  return (
    <div
      className="card"
      key={key}
      onClick={() => navigate("./details/" + contact.key)}
    >
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button
        onClick={(e) => {
          editContact(contact);
          e.stopPropagation();
        }}
      >
        Edit
      </button>
      <button
        onClick={(e) => {
          deleteContact(contact);
          e.stopPropagation();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
