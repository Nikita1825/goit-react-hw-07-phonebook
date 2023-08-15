import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ul>
   
  );
};
