import { List, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
          </ListItem>
        );
      })}
    </List>
  );
};
