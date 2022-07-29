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
    <div className="absolute block w-2/5 h-1/2 top-0 left-0 translate-x-1/2 translate-y-1/2 bg-blue-100 rounded-md drop-shadow-md">
      <form className="flex flex-col gap-4 p-10 " onSubmit={submitHandler}>
        <div>
          <label className="block mb-2 text-md font-semibold text-black font-sans">
            Name:
          </label>
          <input
            type="text"
            className=" text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 bg-color-white"
            required
            name="name"
            id="name"
            value={enteredContact.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label className="block mb-2 text-md font-semibold text-black font-sans">
            Contact:
          </label>
          <input
            type="text"
            className=" text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 "
            name="contact"
            id="contact"
            value={enteredContact.contact}
            onChange={contactChangeHandler}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-20  text-md p-1 mt-3 font-medium text-green-700 focus:outline-none rounded-lg border border-gray-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            {currContact.key !== "" ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
