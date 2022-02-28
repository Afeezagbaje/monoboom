import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signUp.css";

import Input from "../../components/input/input";
import Button from "../../components/button/button";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
  });

//   const [test, setTest] = useState(false);

  useEffect(() => {console.log(state) }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v1/register/', state).then(response => console.log(response));
    console.log(state);

    setState({
      email: "",
      name: "",
      password: "",
    });
  };

//   const style = () => {
//       color: "white"
//   }

//   const handleTest = (e) => {
//      setTest(test + 1);
//   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{height: "100vh"}}>
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
        {/* <div style={style}>{test}</div>
        <button onClick={handleTest}>Test</button> */}
      </div>
    </div>
  );
};

export default SignUp;
