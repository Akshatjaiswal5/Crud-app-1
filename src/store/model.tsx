import { Contact } from "../ContactTypes";
import { Action } from "easy-peasy";

export default interface ContactStoreModel {
  contactList: Contact[];
  currContact: Contact;
  updateContactList: Action<this, Contact>;
  editContact: Action<this, Contact>;
  deleteContact: Action<this, Contact>;
}
