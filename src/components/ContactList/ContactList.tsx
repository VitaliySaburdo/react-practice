type Contact = {
    id: string;
    name: string;
    phone: string;
  };

type ContactLIstProp = {
    contacts: Contact[]
}
export const ContactLIst: React.FC<ContactLIstProp> = ({contacts}) => {
    return <>
          <ul style={{ marginTop: "50px" }}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
    </>
}