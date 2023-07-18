import React from "react";

import User from './User/User';

import './RoomUsers.css';

const RoomUsers = ({ users }) => (
    <div className="usersContainer">
        <div className="roomUsers">
            <h4 className="usersH4">Users currently active in your room:</h4>
            {users.map((user) => <div key={user.id}><User name={user.name}/></div>)}
        </div>
    </div>
)

export default RoomUsers;