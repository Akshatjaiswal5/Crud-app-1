import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ContactState, Contact } from "./ContactTypes";

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

const ContactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    updateContactList(state, action) {
      if (action.payload.key === "") {
        const newContact: Contact = {
          ...action.payload,
          key: Math.random().toString(36).substring(2, 11),
        };
        state.contactList.push(newContact);
      } else {
        state.contactList = state.contactList.map((contact) => {
          if (contact.key === action.payload.key) return action.payload;
          else return contact;
        });

        state.currContact = {
          key: "",
          name: "",
          contact: "",
        };
      }
    },
    editContact(state, action) {
      state.currContact = { ...action.payload };
    },
    deleteContact(state, action) {
      state.contactList = state.contactList.filter((contact) => {
        return contact.key !== action.payload.key;
      });
    },
  },
});

const ContactStore = configureStore({
  reducer: ContactSlice.reducer,
});

export const ContactActions = ContactSlice.actions;

export default ContactStore;
