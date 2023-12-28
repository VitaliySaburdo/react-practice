import { FormEvent, useState } from "react";
import "./App.css";
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
    SetContacts(prev => [...prev, {id: "1", name: name}]);
    setName('');
  };

  return (
    <>
      <form onSubmit={onAddContact}>
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
      <ul>
        {contacts.map((contact) => (
          <li>
            <p>{contact.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
