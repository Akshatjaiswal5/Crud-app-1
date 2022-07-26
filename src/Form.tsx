import React, { useEffect, useState } from "react";
import "./Form.css";
import { Contact, ContactState } from "./ContactTypes";
import { useSelector, useDispatch } from "react-redux";
import { ContactActions } from "./store";

const Form = () => {
  const currContact = useSelector<ContactState, Contact>(
    (state) => state.currContact
  );

  const [enteredContact, setEnteredContact] = useState<Contact>({
    key: "",
    name: "",
    contact: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setEnteredContact({
      ...currContact,
    });
  }, [currContact]);

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredContact({ ...enteredContact, name: e.target.value });
  };
  const contactChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredContact({ ...enteredContact, contact: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (
      enteredContact.name.trim() === "" ||
      enteredContact.contact.trim() === ""
    )
      return;

    dispatch(ContactActions.updateContactList(enteredContact));
    setEnteredContact({
      key: "",
      name: "",
      contact: "",
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-elem">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={enteredContact.name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-elem">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          name="contact"
          id="contact"
          value={enteredContact.contact}
          onChange={contactChangeHandler}
        />
      </div>
      <div className="form-elem">
        <button type="submit">
          {currContact.key !== "" ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
