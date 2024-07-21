import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, selectContacts } from '..//..//redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSearch = (newSearchText) => {
    dispatch(changeFilter(newSearchText.toLowerCase()));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox filterText={filterText} setFilterText={handleSearch} />
      <ContactList contacts={contacts} filterText={filterText} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;