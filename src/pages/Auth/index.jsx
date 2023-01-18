import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Authpage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
};

export default Authpage;
