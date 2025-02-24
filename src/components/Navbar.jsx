import React, { useState } from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, Stack } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import { IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ContactForm from "./ContactForm"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(false);

  // let arr = ["Contact Form", "Saved Contacts", "Settings", "About"];
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={() => { setSelectedComponent("contactForm"); setOpen(true); }}>
                Sample1 (Contact Form)
              </ListItem>
              <ListItem button onClick={() => { setSelectedComponent(null); setOpen(true); }}>
                Sample2
              </ListItem>
              <ListItem button onClick={() => { setSelectedComponent(null); setOpen(true); }}>
                Sample3
              </ListItem>
            </List>
          </Drawer>
          <ContactsIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Stack direction="row" spacing={2}>
            <nav className="nav">
              <NavLink
                to="/"
                className={(e) => {
                  return e.isActive ? "red" : "";
                }}
              >
                Logout
              </NavLink>
            </nav>
          </Stack>
        </Toolbar>
      </AppBar>
      {selectedComponent === "contactForm" && <ContactForm />}
    </div>
  );
};

export default Navbar;
