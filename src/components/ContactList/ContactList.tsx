type Contact = {
    id: string;
    name: string;
    phone: string;
  };

type ContactLIstProp = {
    contacts: Contact[];
    onDelete: (id: string) => void;
}
export const ContactLIst: React.FC<ContactLIstProp> = ({contacts, onDelete}) => {
    return <>
          <ul style={{ marginTop: "50px" }}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <button onClick={()=>onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
}