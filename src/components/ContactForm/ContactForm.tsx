import { FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import {Contact} from '../../types'

type ContactFormProps = {
    onSubmit: (arg0: Contact) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({onSubmit}) => {
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");


    const onAddContact = (e: FormEvent) => {
        e.preventDefault();
        const id = nanoid(8);
        setName("");
        setNumber("");
        onSubmit({ id: id, name: name, phone: number })
      };


    return <>
     <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={onAddContact}
      >
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <button>Add contact</button>
      </form></>
}