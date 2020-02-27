import React from "react";
import './UserCard.css';

const UserCard = (props) => {
    return (
        <div className='user-card'>
            <span>Id: {props.user.id}</span>
            <span>Name: {props.user.name}</span>
            <span>Surname: {props.user.username}</span>
            <span>Email: {props.user.email}</span>
            <button onClick={() => props.handleShowModal(props.user.id)}>Get info</button>
        </div>
    )
};

export default UserCard;