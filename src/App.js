import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Stays from "./pages/Stays";
import Footer from "./component/Footer";
import UserProvider from "./context/userContext";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      console.log("SUCCESS", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (

    <>
    <UserProvider>
      <Navbar
        login={login}
        logout={logout}
        user={user}
        setUser={setUser}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stays" element={<Stays />} />
      </Routes>
      <Footer />
      </UserProvider>
    </>
  );
}

export default App;
