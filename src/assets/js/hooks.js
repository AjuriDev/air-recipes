import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateWindowParams } from '../../store/actions/responsive';

const useWindowResizer = () => {
  const dispatch = useDispatch();

  const handleWindowResize = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    dispatch(updateWindowParams({ width, height }));
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
};

export {
  useWindowResizer,
};