export interface Contact {
  key: string;
  name: string;
  contact: string;
}

export type ContactState = {
  contactList: Contact[];
  currContact: Contact;
};
