import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Modal from '../components/Modal';

const ModalContext = React.createContext();
const { Provider } = ModalContext;

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const switchModalState = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Provider value={{ isOpen, switchModalState }}>
      <Modal modalContent={<div>hola</div>} isOpen={isOpen} />
      {children}
    </Provider>
  );
}

ModalProvider.defaultProps = {
  children: '',
};

ModalProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export { ModalProvider, ModalContext };
