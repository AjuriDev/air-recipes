import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../../assets/i/sprite';
import { closeModal } from '../../../store/actions/modal';
import { StoreNameSpace } from '../../../assets/js/const';

import './Modal.scss';

const Modal = () => {
  const dispatch = useDispatch();

  const { isOpen, withoutCloseBtn, render } = useSelector(
    (state) => state[StoreNameSpace.MODAL]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);
    return () => document.removeEventListener('keydown', handleEscKeydown);
  });

  const handleClose = () => dispatch(closeModal());
  const handleEscKeydown = (e) => {
    if (e.code !== 'Escape') return;
    handleClose();
  };

  if (!render) return null;

  return !isOpen ? null : (
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
        {render()}
      </div>
    </div>
  );
};

export default Modal;
