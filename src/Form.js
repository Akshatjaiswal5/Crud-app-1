import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ editingMode, editingContact, onFinish }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredContact, setEnteredContact] = useState("");

  useEffect(() => {
    setEnteredName(editingMode ? editingContact.name : "");
    setEnteredContact(editingMode ? editingContact.contact : "");
  }, [editingMode, editingContact]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const contactChangeHandler = (e) => {
    setEnteredContact(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "" || enteredContact.trim() === "") return;
    const cnt = {
      key: editingMode
        ? editingContact.key
        : Math.random().toString(36).substring(2, 11),
      name: enteredName.trim(),
      contact: enteredContact.trim(),
    };
    onFinish(cnt);
    setEnteredName("");
    setEnteredContact("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-elem">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-elem">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          name="contact"
          id="contact"
          value={enteredContact}
          onChange={contactChangeHandler}
        />
      </div>
      <div className="form-elem">
        <button type="submit">{editingMode ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default Form;
