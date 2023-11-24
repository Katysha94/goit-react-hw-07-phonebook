import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/contacts/contacts.selectors';
import { deleteContact } from 'redux/contacts/contacts.reducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const getFilteredContacts = () => {
    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContacts;
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {getFilteredContacts().map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={() => handleDelete(id)}
        />
      ))}
    </ul>
  );
};
