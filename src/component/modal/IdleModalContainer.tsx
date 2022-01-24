import React, { FC } from 'react';
import ReactDOM from 'react-dom';


interface IModalContainerProps {
  open: boolean;
}

let rootModal = document.createElement('div');
rootModal.id = 'rootModal';
document.body.appendChild(rootModal);

export const ModalContainer: FC<IModalContainerProps> = ({ children, open }) => {
  return ReactDOM.createPortal(<div>
      {
        open && { children }
      }
    </div>,
    rootModal
  );
};