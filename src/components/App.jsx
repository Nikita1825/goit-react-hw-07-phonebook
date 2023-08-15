import { FormPhone } from './formPhoneBook/formPhoneBook';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {



   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
  
  return (
    <div>
      <FormPhone />
      <Filter />
      <ContactList />
    </div>
  );
};
