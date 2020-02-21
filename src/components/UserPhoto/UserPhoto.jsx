import React from "react";
import './UserPhoto.css';

const UserPhoto = (props) => {
    console.log(props.photo);
    return (
        <div className='user-photo'>
            <span>Album Id: {props.photo.albumId} </span>
            <span>Id: {props.photo.id} </span>
            <p>Title: {props.photo.title}</p>
            <p>URL: {props.photo.url}</p>
            <p>thumbnailUrl: {props.photo.thumbnailUrl}</p>
        </div>
    )
};

export default UserPhoto;