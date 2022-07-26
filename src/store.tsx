import { legacy_createStore as createStore } from "redux";
import { ContactState, Contact } from "./ContactTypes";

const initialValues: ContactState = {
  contactList: [
    {
      key: "akj9apjrm2",
      name: "Akshat Jaiswal",
      contact: "7694000397",
    },
    {
      key: "7d0kat86o3",
      name: "Prasanna Vyas",
      contact: "9826527533",
    },
    {
      key: "lhlg9f8se4",
      name: "Suyash Patil",
      contact: "8785755578",
    },
    {
      key: "nl3ej2l56h",
      name: "Shashwat Thakur",
      contact: "8867566564",
    },
  ],
  currContact: {
    key: "",
    name: "",
    contact: "",
  },
};

const ContactStoreReducer = (state = initialValues, action: any) => {
  const newState = { ...state };

  if (action.type === "UPDATE_CONTACTLIST") {
    if (action.payload.key === "") {
      const newContact: Contact = {
        ...action.payload,
        key: Math.random().toString(36).substring(2, 11),
      };
      newState.contactList = [...state.contactList, newContact];
    } else {
      newState.contactList = state.contactList.map((contact) => {
        if (contact.key === action.payload.key) return action.payload;
        else return contact;
      });
      newState.currContact = {
        key: "",
        name: "",
        contact: "",
      };
    }
    return newState;
  }

  if (action.type === "EDIT_CONTACT") {
    newState.currContact = { ...action.payload };
    return newState;
  }

  if (action.type === "DELETE_CONTACT") {
    newState.contactList = state.contactList.filter((contact) => {
      return contact.key !== action.payload.key;
    });
    return newState;
  }

  return newState;
};

const ContactStore = createStore(ContactStoreReducer);

export default ContactStore;
