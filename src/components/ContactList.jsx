import React from "react";
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ContactList = ({ contacts, setContacts }) => {

  // Function to handle removal of a contact
  const removeContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom align="center">
        Contact List
      </Typography>
      <List>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => removeContact(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={contact.name}
              secondary={
                <>
                  {contact.no} <br />
                  {contact.address}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
