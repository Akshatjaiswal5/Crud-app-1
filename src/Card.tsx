import React from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { Contact } from "./ContactTypes";

const Card = ({ contact }: { contact: Contact }, key: string) => {
  const dispatch = useDispatch();
  const editContact = () => {
    dispatch({ type: "EDIT_CONTACT", payload: contact });
  };
  const deleteContact = () => {
    dispatch({ type: "DELETE_CONTACT", payload: contact });
  };

  return (
    <div className="card" key={key}>
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button onClick={editContact}>Edit</button>
      <button onClick={deleteContact}>Delete</button>
    </div>
  );
};

export default Card;
