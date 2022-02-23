import React from 'react';
import './button.css';

const Button = ({ backgroundColor, color, text, padding, fontSize, margin, handleClick }) => {

    const style = {
        backgroundColor: backgroundColor ? backgroundColor : '#fff',
        color: color ? color : '#000',
        padding: padding ? padding : '10px',
        fontSize: fontSize ? fontSize : '20px',
        margin: margin ? margin : '0',
    }

  return (
    <div onClick={handleClick} style={style} className="button">
        {text ? text : 'Button'}
    </div>
  )
}

export default Button