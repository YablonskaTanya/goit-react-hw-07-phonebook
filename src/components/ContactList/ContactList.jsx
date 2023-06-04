import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.contactText}>
            {name}: {number}
          </p>
          <button
            className={css.contactListBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};
