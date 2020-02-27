import React, {useEffect, useReducer, useState} from "react";
import UserPhoto from "../UserPhoto/UserPhoto";
import './UserPhotos.css';
import Modal from "../Modal/Modal";
import PhotoModal from "../Modal/PhotoModal/PhotoModal";
import UserCard from "../UserCard/UserCard";
import UserModal from "../Modal/UserModal/UserModal";

const initialState = {
    photos: [],
    modal: {
        isShowModal: false,
        photo: {},
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: action.payload,
            };

        case 'SHOW_MODAL':
            return {
                ...state,
                modal: {
                    isShowModal: true,
                    photo: state.photos.find(u => u.id === action.payload)
                }
            };

        case 'HIDE_MODAL':
            return {
                ...state,
                modal: {
                    isShowModal: false,
                    photo: null,
                }
            };

        default: return state;

    }
};


const UserPhotos = ({data}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:'SET_PHOTOS', payload: data})
    }, [data]);
    useEffect(() => {console.log(state)});

    const handleShowModal = (id) => {
        dispatch({type: 'SHOW_MODAL', payload: id})
    };

    const handleHideModal = () => {
        dispatch({type: 'HIDE_MODAL'})
    };

    return (
        <>
            <div className='user-photos'>
                {state.photos.map(card => <UserPhoto photo={card} handleShowModal={handleShowModal} />)}
            </div>
            <Modal isShowModal={state.modal.isShowModal} handleHideModal={handleHideModal}>
                <UserModal photo={state.modal.photo}/>
            </Modal>
        </>
    )
};

export default UserPhotos;