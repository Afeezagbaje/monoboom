import React from "react";
import "./input.css";

const Input = ({ type, name, handleChange, height, placeholder, value, ...otherProps }) => {

    const style = {
        height: height ? height : "50px",
    }

  return (
    <div>
      <h3>{placeholder ? placeholder : "Email"}</h3>
      <input name={name} style={style} type={type} value={value} onChange={handleChange} className="input" {...otherProps}/>
    </div>
  );
};

export default Input;
