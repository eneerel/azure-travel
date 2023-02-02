import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

const Login = ({ handleClose, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin
          setSignIn={setSignIn}
          handleClose={handleClose}
          setUser={setUser}
        />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
