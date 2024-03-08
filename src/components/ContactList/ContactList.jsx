import ContactItem from 'components/ContactItem/ContactItem';
export const ContactList = ({ dataContact, deleteUser }) => {
  return (
    <ul>
      {dataContact.map(contact => (
        <ContactItem
          key={contact.id}
          deleteUser={deleteUser}
          contact={contact}
        />
      ))}
    </ul>
  );
};
