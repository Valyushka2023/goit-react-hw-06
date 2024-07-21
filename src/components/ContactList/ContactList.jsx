import { useSelector } from 'react-redux'; 
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '..//..//redux/contactsSlice'; 
import { selectNameFilter } from '../../redux/filtersSlice';


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectNameFilter);


  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterText));

  return (
    <div className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

