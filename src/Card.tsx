import React from "react";
import "./Card.css";
import { Contact } from "./ContactTypes";
import { useStoreActions } from "./store/hooks";

const Card = ({ contact }: { contact: Contact }, key: string) => {
  const deleteContact = useStoreActions((actions) => actions.deleteContact);
  const editContact = useStoreActions((actions) => actions.editContact);

  return (
    <div className="card" key={key}>
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button onClick={() => editContact(contact)}>Edit</button>
      <button onClick={() => deleteContact(contact)}>Delete</button>
    </div>
  );
};

export default Card;
