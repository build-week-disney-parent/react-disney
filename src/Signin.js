import React, { useState } from "react";
import SigninForm from "./components/Forms/SigninForm";
import SignupForm from "./components/Forms/SignupForm";

function Signin() {
  const [isSignin, setSignin] = useState();

  const handleSignin = e => {
    e.preventDefault();
    setSignin(false);
  };
  const handleSignup = e => {
    e.preventDefault();
    setSignin(true);
  };

  return (
    <div className="container">
      <div className="control-box">
        <div className={`${isSignin ? "" : "active"}`} onClick={handleSignin}>
          <p className="control-p">Sign In</p>
        </div>
        <div
          className={`${isSignin ? "active" : '"active"'}`}
          onClick={handleSignup}
        >
          <p className="control-p">Sign Up</p>
        </div>
      </div>
      {isSignin ? <SignupForm /> : <SigninForm />}
    </div>
  );
}

export default Signin;
