import ContactItem from 'components/ContactItem/ContactItem';
export const ContactList = ({ dataContact, deleteUser }) => {
  return (
    <ul>
      {dataContact.map(contact => (
        <ContactItem deleteUser={deleteUser} contact={contact} />
      ))}
    </ul>
  );
};
