import React from 'react';

function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
