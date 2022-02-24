import React, { useState } from "react";
import "./signUp.css";

import NavBar from "../../components/navbar/navbar";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState({
      email: "",
      name: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({...state, [name]: value})
  };

  return (
    <>
      <NavBar />

      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2 className="welcome">Welcome Aboard!</h2>
          <h3 className="signout_text">SIGN OUT</h3>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            handleChange={handleChange}
          />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            handleChange={handleChange}
          />
          <Button text="SIGN UP" margin="50px 0" padding="20px 10px" />
        </form>
      </div>
    </>
  );
};

export default SignUp;
