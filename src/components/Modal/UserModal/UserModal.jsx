import React from "react";

const UserModal = ({user}) => {
    return(
        <div className='user-card'>
            <span>Id: {user.id}</span>
            <span>Name: {user.name}</span>
            <span>Surname: {user.username}</span>
            <span>Email: {user.email}</span>
        </div>
    );
};

export default UserModal;