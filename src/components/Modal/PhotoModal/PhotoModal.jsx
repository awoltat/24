import React from "react";

const PhotoModal = ({photo}) => {
    return(
        <div className='user-photo'>
            <span>Album Id: {photo.albumId} </span>
            <span>Id: {photo.id} </span>
            <p>Title: {photo.title}</p>
            <p>URL: {photo.url}</p>
            <p>thumbnailUrl: {photo.thumbnailUrl}</p>
        </div>
    );
};

export default PhotoModal;