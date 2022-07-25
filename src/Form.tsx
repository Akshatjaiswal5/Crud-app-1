import React, { useEffect, useState } from "react";
import "./Form.css";
import Contact from "./Contact";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";

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
      <FormControl className="form-elem">
        <InputLabel htmlFor="name">Name:</InputLabel>
        <Input
          type="text"
          name="name"
          id="name"
          value={enteredContact.name}
          onChange={nameChangeHandler}
        />
      </FormControl>
      <FormControl className="form-elem">
        <InputLabel htmlFor="contact">Contact:</InputLabel>
        <Input
          type="text"
          name="contact"
          id="contact"
          value={enteredContact.contact}
          onChange={contactChangeHandler}
        />
      </FormControl>
      <FormControl className="form-elem">
        <Button type="submit" variant="contained" color="primary">
          {currContact.key !== "" ? "Update" : "Add"}
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
