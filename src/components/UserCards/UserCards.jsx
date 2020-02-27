import React, {useEffect, useReducer, useState} from "react";
import './UserCards.css';
import UserCard from "../UserCard/UserCard";
import Modal from "../Modal/Modal";
import UserModal from "../Modal/UserModal/UserModal";

const initialState = {
    users: [],
    modal: {
        isShowModal: false,
        user: {},
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };

        case 'SHOW_MODAL':
            return {
                ...state,
                modal: {
                    isShowModal: true,
                    user: state.users.find(u => u.id === action.payload)
                }
            };

        case 'HIDE_MODAL':
            return {
                ...state,
                modal: {
                    isShowModal: false,
                    user: null,
                }
            };

        default: return state;

    }
};

const UserCards = ({data}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:'SET_USERS', payload: data})
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
            <div className='user-cards'>
                {state.users.map(card => <UserCard user={card} handleShowModal={handleShowModal} />)}
            </div>
            <Modal isShowModal={state.modal.isShowModal} handleHideModal={handleHideModal}>
                <UserModal user={state.modal.user}/>
            </Modal>
        </>
    )
};

export default UserCards;