import React from 'react';
import './button.css';

const Button = ({ backgroundColor, color, text, padding, fontSize, margin, handleClick, type }) => {

    const style = {
        backgroundColor: backgroundColor ? backgroundColor : '#fff',
        color: color ? color : '#000',
        padding: padding ? padding : '10px',
        fontSize: fontSize ? fontSize : '20px',
        margin: margin ? margin : '0',
    }

  return (
    <button type="submit" onClick={handleClick} style={style} className="button">
        {text ? text : 'Button'}
    </button>
  )
}

export default Button