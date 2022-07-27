import { createStore, action } from "easy-peasy";
import { ContactState, Contact } from "../ContactTypes";
import ContactStoreModel from "./model";

const initialState: ContactState = {
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

const ContactStore = createStore<ContactStoreModel>({
  contactList: initialState.contactList,
  currContact: initialState.currContact,
  updateContactList: action((state, payload) => {
    if (payload.key === "") {
      const newContact: Contact = {
        ...payload,
        key: Math.random().toString(36).substring(2, 11),
      };
      state.contactList.push(newContact);
    } else {
      state.contactList = state.contactList.map((contact) => {
        if (contact.key === payload.key) return payload;
        else return contact;
      });

      state.currContact = {
        key: "",
        name: "",
        contact: "",
      };
    }
  }),
  editContact: action((state, payload) => {
    state.currContact = { ...payload };
  }),
  deleteContact: action((state, payload) => {
    state.contactList = state.contactList.filter((contact) => {
      return contact.key !== payload.key;
    });
  }),
});

export default ContactStore;
