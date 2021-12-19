import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { StoreNameSpace } from '../../../assets/js/const';

const Container = ({ children, renderSidebar }) => {
  const { isDesktopSize } = useSelector(
    (state) => state[StoreNameSpace.RESPONSIVE].window
  );
  const hasSidebar = !!renderSidebar;

  return (
    <div className="container">
      {hasSidebar && isDesktopSize && (
        <div className="container__sidebar">{renderSidebar()}</div>
      )}
      <div className="container__content">{children}</div>
    </div>
  );
};

Container.propTypes = {
  renderSidebar: PropTypes.func,
};

export default Container;
