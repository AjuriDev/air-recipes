import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useBlockPageScroll } from '../../../assets/js/hooks';
import { close } from '../../../assets/i/sprite';

import './Modal.scss';

const Modal = ({ onToggle, withoutCloseBtn, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);
    return () => document.removeEventListener('keydown', handleEscKeydown);
  });

  useBlockPageScroll();

  const handleClose = () => onToggle(false);
  const handleEscKeydown = (e) => {
    if (e.code !== 'Escape') return;
    onToggle(false);
  };

  return ReactDOM.createPortal(
    <div className="modal" onMouseDown={handleClose}>
      <div className="modal__content" onMouseDown={(e) => e.stopPropagation()}>
        {withoutCloseBtn ? null : (
          <button
            className="modal__close"
            type="button"
            aria-label="Закрыть"
            onClick={handleClose}
          >
            {close}
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
