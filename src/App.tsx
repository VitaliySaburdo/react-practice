import { useState } from "react";
import "./App.css";
import { Contact } from "./types";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactLIst } from "./components/ContactList/ContactList";
import { ContactsFilter } from "./components/ContactsFilter/ContactsFilter";
import defaultContacts from "./data/contacts.json";

function App() {
  const [contacts, SetContacts] = useState<Contact[]>(defaultContacts);
  const [filter, setFilter] = useState('');

  const handleOnSubmit = (contact: Contact) => {
    SetContacts((prev) => [...prev, contact]);
  };

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onSubmit={handleOnSubmit} />
      <ContactsFilter
        handleOnInput={handleOnInput}
      />
      <ContactLIst contacts={visibleContacts} />
    </>
  );
}

export default App;
