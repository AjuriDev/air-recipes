import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  updateWindowParams,
  updateDocumentParams,
} from '../../store/actions/responsive';

const useResponsive = () => {
  const dispatch = useDispatch();

  const handleWindowResize = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    dispatch(updateWindowParams({ width, height }));

    const htmlEl = document.querySelector('html');
    const htmlFontSize = window
      .getComputedStyle(htmlEl, null)
      .getPropertyValue('font-size');
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

const useScrollTo = (el) => {
  // TODO сделать хук более универсальным
  const location = useLocation();
  const [initRoute, setInitRoute] = useState(location.pathname);

  useEffect(() => {
    setInitRoute(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (
      !el ||
      window.scrollY <= el.clientHeight ||
      location.pathname === initRoute
    )
      return;
    window.scrollTo({
      top: el.clientHeight - 16, // скролл чуть ниже хедера
      left: 0,
      behavior: 'smooth',
    });
  }, [el, location.pathname]);
};

const useBlockPageScroll = (isBlock = true) => {
  useEffect(() => {
    if (isBlock) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = '';
      document.documentElement.style.overflowY = '';
    };
  }, [isBlock]);
};

export { useResponsive, useStartFetching, useScrollTo, useBlockPageScroll };
