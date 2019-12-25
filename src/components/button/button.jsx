import React from 'react';

import './button.css';

const Button = ({btnName, onClick}) => (
    <button onClick={onClick}>{btnName}</button>
);

export default Button;