import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ isError, children }) => {
  return <div className={`message ${isError ? '_error' : ''}`}>{children}</div>;
};

Message.propTypes = {
  isError: PropTypes.bool,
};

export default Message;
