import React from "react";

import onlineIcon from '../../../icons/onlineIcon.png';

import './User.css';

const User = ({ name }) => (
    <div className="userContainer">
       <img className="onlineUser" src={onlineIcon} alt="online"/> <p className="userName">{name}</p>
    </div>
)

export default User;