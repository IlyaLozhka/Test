import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';


interface IModalContainerProps {
  readonly component: ReactNode;
}

let rootModal = document.createElement('div');
rootModal.id = 'rootModal';
document.body.appendChild(rootModal);

export const ModalContainer: FC<IModalContainerProps> = ({ component }) => {
  return ReactDOM.createPortal(<div>
      {component}
    </div>,
    rootModal
  );
};