import { FaGenderless } from 'react-icons/fa';
import { Item, Name, Number, Button } from './ContactItem.styled';

const ContactItem = ({ contact, deleteUser }) => {
  const { name, number, id } = contact;
  return (
    <Item key={name}>
      <FaGenderless />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button onClick={() => deleteUser(id)}>Delete</Button>
    </Item>
  );
};
export default ContactItem;
