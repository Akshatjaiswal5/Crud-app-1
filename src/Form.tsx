import React, { useEffect, useState } from "react";
import "./Form.css";
import Contact from "./Contact";

type ContactCRUDHandler = (cnt: Contact) => void;

const Form = ({
  currContact,
  onFinish,
}: {
  currContact: Contact;
  onFinish: ContactCRUDHandler;
}) => {
  const [enteredContact, setEnteredContact] = useState<Contact>({
    key: "",
    name: "",
    contact: "",
  });

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

    onFinish(enteredContact);
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
