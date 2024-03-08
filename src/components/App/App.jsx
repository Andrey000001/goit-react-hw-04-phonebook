import { useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import useLocalStr from 'components/hooks/useLocalStr';

export default function App() {
  const [contacts, setContacts] = useLocalStr('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const deleteUser = ids => {
    setContacts(prevContact => prevContact.filter(contct => contct.id !== ids));
  };

  const addUser = allInfoUser => {
    const { name } = allInfoUser;
    const id = nanoid();
    if (contacts.some(({ name: currentNames }) => currentNames === name)) {
      alert('Contact with this name already exists');
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        {
          id,
          ...allInfoUser,
        },
      ]);
    }
  };

  const getNameOrNumber = gotName => {
    setFilter(gotName);
  };

  const filterContactList = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <h2>Contacts</h2>
      <Filter getNameOrNumber={getNameOrNumber} value={filter} />
      <ContactList dataContact={filterContactList()} deleteUser={deleteUser} />
    </Container>
  );
}
