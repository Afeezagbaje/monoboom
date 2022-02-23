import React from "react";
import "./signUp.css";

import NavBar from "../../components/navbar/navbar";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <div className="signup">
        <h2 className="welcome">Welcome Aboard!</h2>
        <h3 className="signout_text">SIGN OUT</h3>
        <Input placeholder="Email" />
        <Input placeholder="Name" />
        <Input placeholder="Password" />
        <Button text="SIGN UP" margin="50px 0" padding="20px 10px"/>
      </div>
    </>
  );
};

export default SignUp;
