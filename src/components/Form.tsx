import React, { useEffect, useState } from "react";
import { Contact } from "../ContactTypes";
import { useStoreState, useStoreActions } from "../store/hooks";

const Form = () => {
  const currContact = useStoreState((state) => state.currContact);
  const updateContactList = useStoreActions(
    (actions) => actions.updateContactList
  );

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

    updateContactList(enteredContact);
    setEnteredContact({
      key: "",
      name: "",
      contact: "",
    });
  };

  return (
    <div className="block columns">
      <div className="column p-6 box level-item is-half is-offset-one-quarter">
        <form onSubmit={submitHandler}>
          <div className="block field">
            <label className="block label">Name:</label>
            <div className="control">
              <input
                type="text"
                className="input"
                required
                name="name"
                id="name"
                value={enteredContact.name}
                onChange={nameChangeHandler}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Contact:</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="contact"
                id="contact"
                value={enteredContact.contact}
                onChange={contactChangeHandler}
              />
            </div>
          </div>

          <div className="field block">
            <div className="control block">
              <button type="submit" className="button is-primary ">
                {currContact.key !== "" ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
