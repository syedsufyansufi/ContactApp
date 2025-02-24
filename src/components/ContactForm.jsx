import React, { useState } from "react";
import { ContactList } from "./ContactList.jsx";
import { Button, TextField, Box, Typography } from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [no, setNo] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState([]);

  const HandleClick = () => {
    setContacts([...contacts, { name, no, address }]);
    setName("");
    setNo("");
    setAddress("");
  };

  return (
    <div className="contact-form">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          label="Name"
          color="secondary"
          value={name}
          margin="normal"
          onChange={(e) => setName(e.target.value)}
          focused
        />
        <TextField
          label="Contact No"
          color="secondary"
          value={no}
          margin="normal"
          onChange={(e) => setNo(e.target.value)}
          focused
        />
        <TextField
          label="Address"
          color="secondary"
          value={address}
          margin="normal"
          onChange={(e) => setAddress(e.target.value)}
          focused
        />
        <Button margin="normal" variant="contained" onClick={HandleClick}>
          Submit
        </Button>
      </Box>
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default ContactForm;
