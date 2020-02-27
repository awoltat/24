import React from "react";
import './UserAlbum.css';

const UserAlbum = (props) => {
    return (
        <div className='user-album'>
            <span>User Id: {props.album.userId}</span>
            <span>Id: {props.album.id}</span>
            <span>Title: {props.album.title}</span>
            <button onClick={() => props.handleSetId(props.album.id)}>Get info</button>
        </div>
    )
};

export default UserAlbum;