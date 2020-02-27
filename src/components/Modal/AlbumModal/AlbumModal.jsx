import React from "react";

const AlbumModal = ({album}) => {
    return(
        <div className='user-album'>
            <span>User Id: {album.userId}</span>
            <span>Id: {album.id}</span>
            <span>Title: {album.title}</span>
        </div>
    );
};

export default AlbumModal;