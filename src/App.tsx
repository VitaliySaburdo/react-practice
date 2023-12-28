import { FormEvent, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// import contacts from "./data/contacts.json";

type Contact = {
  id: string;
  name: string;
};

function App() {
  const [name, setName] = useState<string>('');
  const [contacts, SetContacts] = useState<Contact[]>([]);

  const onAddContact = (e: FormEvent) => {
    e.preventDefault();
    const id = nanoid(8)
    SetContacts(prev => [...prev, {id: id, name: name}]);
    setName('');
  };

  return (
    <>
      <form style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "20px"}} onSubmit={onAddContact}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add contact</button>
      </form>
      <ul style={{marginTop: "50px"}}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
