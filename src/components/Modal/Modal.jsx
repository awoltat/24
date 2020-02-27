import React, {useState} from "react";
import './Modal.css';

const Modal = (props) => {
    const {children, isShowModal, handleHideModal} = props;

    const hideModal = (e) => {
      if (e.target.className === 'modal') {
          handleHideModal();
      }
    };

    return (
        isShowModal &&
        <div className='modal' onClick={hideModal}>
            {children}
        </div>
    );
};

export default Modal;