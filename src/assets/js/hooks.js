import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWindowParams, updateDocumentParams } from '../../store/actions/responsive';

const useResponsive = () => {
  const dispatch = useDispatch();

  const handleWindowResize = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    dispatch(updateWindowParams({ width, height }));

    const htmlEl = document.querySelector('html');
    const htmlFontSize = window.getComputedStyle(htmlEl, null).getPropertyValue('font-size');
    const remInPixels = parseFloat(htmlFontSize);

    dispatch(updateDocumentParams({ remInPixels }));
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
};

const useStartFetching = (isFetching) => {
  const [isStartFetching, setIsStartFetching] = useState(false);

  useEffect(() => {
    if (isFetching) setIsStartFetching(true);
  }, [isFetching]);

  return isStartFetching;
};

export {
  useResponsive,
  useStartFetching,
};