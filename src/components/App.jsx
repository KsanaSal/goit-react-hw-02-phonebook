import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = value => {
    console.log(value);
    const contact = { id: nanoid(), name: value.name, number: value.number };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filter = e => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  filteredList = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={this.filteredList()} />
      </div>
    );
  }
}
