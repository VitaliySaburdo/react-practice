import { useEffect, useState } from "react";
import "./App.css";
import { Contact } from "./types";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactLIst } from "./components/ContactList/ContactList";
import { ContactsFilter } from "./components/ContactsFilter/ContactsFilter";
import defaultContacts from "./data/contacts.json";

function App() {
  const [contacts, SetContacts] = useState<Contact[]>(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts") as string);
    return storedContacts || defaultContacts;
  });
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleOnSubmit = (contact: Contact) => {
    SetContacts((prev) => [...prev, contact]);
  };

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleOnDelete = (id: string) => {
    SetContacts(visibleContacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onSubmit={handleOnSubmit} contacts={contacts} />
      <ContactsFilter handleOnInput={handleOnInput} />
      <ContactLIst onDelete={handleOnDelete} contacts={visibleContacts} />
    </>
  );
}

export default App;
