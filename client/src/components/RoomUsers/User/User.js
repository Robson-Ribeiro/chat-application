import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png';

import './User.css';

const User = ({ name }) => (
    <div className="userContainer">
       <img src={onlineIcon} alt="online"/> <p>{name}</p>
    </div>
)

export default User;