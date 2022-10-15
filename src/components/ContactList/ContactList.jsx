import { List, ListItem, Button, ListItemWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ListItemWrapper>
              {contact.name}: {contact.number}
              <Button type="button" onClick={() => deleteContact(contact.id)}>Delete</Button>
            </ListItemWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};
