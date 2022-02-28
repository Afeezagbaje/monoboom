import React from "react";

const Card = ({ text }) => {
  return (
    <div>
      <h1 data-testid="card" style={{ color: "white" }}>
        {text}
      </h1>
    </div>
  );
};

export const Cards = ({ text }) => {
    return (
      <div>
        <h1 data-testid="card" style={{ color: "white" }}>
          {text}
        </h1>
        <h1 style={{ color: "white" }}>{text}</h1>
      </div>
    );
  };

export default Card;
