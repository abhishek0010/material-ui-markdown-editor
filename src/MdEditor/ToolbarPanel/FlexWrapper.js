import React from 'react';
import PropTypes from 'prop-types';

const FlexWrapper = ({ children }) =>
  <div style={{ display: 'flex' }}>
    {children}
  </div>

export default FlexWrapper

FlexWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ])
}
