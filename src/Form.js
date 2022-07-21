import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ currContact, onFinish }) => {
  const [enteredContact, setEnteredContact] = useState({
    key: "",
    name: "",
    contact: "",
  });

  useEffect(() => {
    setEnteredContact({
      key: currContact.key,
      name: currContact.name,
      contact: currContact.contact,
    });
  }, [currContact]);

  const nameChangeHandler = (e) => {
    setEnteredContact({ ...enteredContact, name: e.target.value });
  };
  const contactChangeHandler = (e) => {
    setEnteredContact({ ...enteredContact, contact: e.target.value });
  };

  const submitHandler = (e) => {
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
