import React from 'react';
import PropTypes from 'prop-types';

//MUI stuff
import IconButton from '@material-ui/core/IconButton';

const Button = ({ onClick, style, icon, openDialog, isImageDialog }, { toggleDialog }) => (
  <IconButton
    onClick={(openDialog ? toggleDialog(isImageDialog) : onClick)} //eslint-disable-line
    style={{ ...style, minWidth: '36px' }}
    icon={icon}
  />
)

Button.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  isImageDialog: PropTypes.bool,
  style: PropTypes.object, //eslint-disable-line
  openDialog: PropTypes.bool
}

Button.contextTypes = {
  toggleDialog: PropTypes.func
}

export default Button
