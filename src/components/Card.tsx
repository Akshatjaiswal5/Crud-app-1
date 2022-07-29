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
      className="p-5 drop-shadow-md font-semibold font-sans w-11/12 bg-blue-100 rounded-lg border-2 border-gray-200 backdrop-blur hover:bg-gray-100 mt-5 mx-auto card"
      key={key}
      onClick={() => navigate("./details/" + contact.key)}
    >
      <label>Name: {contact.name}</label>
      <label>Contact: {contact.contact}</label>
      <button
        className="w-14 h-6 text-sm font-medium text-blue-700 focus:outline-none rounded-lg border border-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        onClick={(e) => {
          editContact(contact);
          e.stopPropagation();
        }}
      >
        Edit
      </button>
      <button
        className="w-16 h-6 text-sm font-medium text-red-700 focus:outline-none rounded-lg border border-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200"
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
