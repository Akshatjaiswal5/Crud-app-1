import React from "react";
import { Contact } from "../ContactTypes";
import { useStoreActions } from "../store/hooks";
import { useNavigate } from "react-router-dom";
const Card = ({ contact }: { contact: Contact }, key: string) => {
  const deleteContact = useStoreActions((actions) => actions.deleteContact);
  const editContact = useStoreActions((actions) => actions.editContact);
  const navigate = useNavigate();

  return (
    <div
      className="columns box mt-5"
      key={key}
      onClick={() => navigate("./details/" + contact.key)}
    >
      <label className="column is-one-third has-text-weight-semibold">
        Name: {contact.name}
      </label>
      <label className="column is-one-third has-text-weight-semibold">
        Contact: {contact.contact}
      </label>
      <div className="column">
        <button
          className="button is-link is-rounded is-small"
          onClick={(e) => {
            editContact(contact);
            e.stopPropagation();
          }}
        >
          Edit
        </button>
      </div>
      <div className="column">
        <button
          className="button is-danger is-rounded is-small"
          onClick={(e) => {
            deleteContact(contact);
            e.stopPropagation();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
