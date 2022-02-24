import React from "react";
import "./input.css";

const Input = ({ type, name, label, handleChange, height, placeholder, value, ...otherProps }) => {

    const style = {
        height: height ? height : "50px",
    }

  return (
    <div>
      <h3>{placeholder ? placeholder : ""}</h3>
      <input id={type} name={name} style={style} type={type} value={value} onChange={handleChange} className="input" {...otherProps}/>
      <label htmlFor="checkout" >{label}</label>
    </div>
  );
};

export default Input;
