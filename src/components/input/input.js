import React from "react";
import "./input.css";

const Input = ({ height, placeholder }) => {

    const style = {
        height: height ? height : "50px",
    }

  return (
    <div>
      <h3>{placeholder ? placeholder : "Email"}</h3>
      <input style={style} type="text"  className="input"/>
    </div>
  );
};

export default Input;
