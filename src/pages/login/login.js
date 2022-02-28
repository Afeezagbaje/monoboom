import React, { useState } from "react";
import axios from "axios";
import "./login.css";

import Input from "../../components/input/input";
import Button from "../../components/button/button";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post('http://localhost:8000/api/v1/login/', state)
    .then(response => {
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => console.log(error.message));
    setState({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{height: "100vh"}}>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h2 className="hello">Hello there!</h2>
          <p className="para">Please sign in to continue</p>
          <h3 className="login_text">SIGN IN</h3>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            handleChange={handleChange}
          />
          <Button text="SIGN IN" margin="50px 0" padding="20px 10px" />
        </form>
      </div>
    </div>
  );
};

export default Login;
