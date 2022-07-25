import React from "react";
import "./ContactCard.css";
import Contact from "./Contact";
import { Button, Card, Typography } from "@material-ui/core";

type ContactCRUDHandler = (cnt: Contact) => void;

const ContactCard = (
  {
    contact,
    editContact,
    deleteContact,
  }: {
    contact: Contact;
    editContact: ContactCRUDHandler;
    deleteContact: ContactCRUDHandler;
  },
  key: string
) => {
  return (
    <Card className="card" variant="outlined" key={key}>
      <Typography>Name: {contact.name}</Typography>
      <Typography>Contact: {contact.contact}</Typography>
      <Button
        onClick={(e) => {
          editContact(contact);
        }}
      >
        Edit
      </Button>
      <Button
        onClick={(e) => {
          deleteContact(contact);
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ContactCard;
