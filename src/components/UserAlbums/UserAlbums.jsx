import React, {useEffect, useState} from "react";
import './UserAlbums.css';
import UserAlbum from "../UserAlbum/UserAlbum";
import Modal from "../Modal/Modal";
import AlbumModal from "../Modal/AlbumModal/AlbumModal";

const UserAlbums = ({data}) => {
    const [checkedAlbumId, setCheckedAlbumId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [album, setAlbum] = useState({});

    const handleSetId = id => setCheckedAlbumId(id);

    useEffect(() => {
        if (checkedAlbumId !== null && data.length) {
            const album = data.find(u => u.id === checkedAlbumId);
            console.log(album);
            setAlbum(album);
            setShowModal(true);
        }
    }, [checkedAlbumId]);

    return (
        <>
            <div className='user-albums'>
                {data.map(card => <UserAlbum album={card} handleSetId={handleSetId}/>)}
            </div>
            <Modal {...{showModal, setShowModal}}>
                <AlbumModal album={album}/>)
            </Modal>
        </>
    )
};
export default UserAlbums;