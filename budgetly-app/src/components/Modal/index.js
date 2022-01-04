import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Background from './styles/Background';
import ModalContainer from './styles/ModalContainer';

function Modal({
  modalContent,
  isOpen,
}) {
  if (isOpen) {
    return ReactDOM.createPortal(
      <Background>
        <ModalContainer>
          {modalContent}
        </ModalContainer>
      </Background>,
      document.getElementById('modal-root'),
    );
  }
  return null;
}

Modal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
