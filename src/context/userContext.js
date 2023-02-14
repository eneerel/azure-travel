import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <UserContext.Provider
      value={{ openModal, handleClose, handleOpen, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;