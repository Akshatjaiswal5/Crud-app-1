import React from "react";
import "./Form.css";
import { Contact, ContactState } from "./ContactTypes";
import { useSelector, useDispatch } from "react-redux";
import { ContactActions } from "./store";
import { ReactForm } from "react-forms";

const Form = () => {
  const currContact = useSelector<ContactState, Contact>(
    (state) => state.currContact
  );
  const dispatch = useDispatch();

  const submitHandler = (contact: Contact, helper: { resetForm: () => {} }) => {
    if (contact.name.trim() === "" || contact.contact.trim() === "") return;
    dispatch(ContactActions.updateContactList(contact));
    helper.resetForm();
  };

  const myConfig = [
    {
      type: "text",
      valueKey: "name",
      fieldProps: { label: "Name", fullWidth: true },
    },
    {
      type: "text",
      valueKey: "contact",
      fieldProps: { label: "Contact", fullWidth: true },
    },
  ];
  const myInitialValue: Contact = { ...currContact };

  return (
    <div>
      <ReactForm
        enableReinitialize
        config={myConfig}
        initialValues={myInitialValue}
        onSubmit={submitHandler}
        formId={""}
        actionConfig={{ submitButtonProps: {} }}
      />
    </div>
  );
};

export default Form;
