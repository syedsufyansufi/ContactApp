import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import { ContactList } from "./components/ContactList";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <ContactForm />
        </>
      ),
    },
    ,
    {
      path: "/save",
      element: (
        <>
          <Navbar />
          <ContactList />
        </>
      ),
    },

    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NotFound />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
