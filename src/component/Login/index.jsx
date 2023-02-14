import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

const Login = ({ handleClose,user, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin
          setSignIn={setSignIn}
          handleClose={handleClose}
          setUser={setUser}
          user={user}
        />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
