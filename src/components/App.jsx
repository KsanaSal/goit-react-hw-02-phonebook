import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (value, {resetForm}) => {
    const contact = { id: nanoid(), name: value.name, number: value.number };
    if (
      this.state.contacts.filter(el =>
        el.name.toLocaleLowerCase().includes(value.name.toLocaleLowerCase())
      ).length === 0
    ) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      alert(`${value.name} is already in contacts`);
    }
    resetForm()
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filteredList = () => {
    return this.state.contacts.filter(el =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterChange={ this.filterChange} />
        <ContactList
          contacts={this.filteredList()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
