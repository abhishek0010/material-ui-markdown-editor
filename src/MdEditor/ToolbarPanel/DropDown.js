import React from 'react';
import PropTypes from 'prop-types';

//MUI stuff
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'

const DropDown = ({ icon, style, options, onItemTouchTap }) => (
  <Menu
    onItemTouchTap={onItemTouchTap}
    iconButtonElement={
      <IconButton style={style}>
        { icon }
      </IconButton>
    }
  >
    {
      options.map((option, i) => <MenuItem key={i} {...option} />)
    }
  </Menu>
)

DropDown.propTypes = {
  icon: PropTypes.element,
  onItemTouchTap: PropTypes.func,
  style: PropTypes.object, //eslint-disable-line
  options: PropTypes.arrayOf(
    PropTypes.shape({
      style: PropTypes.object, //eslint-disable-line
      primaryText: PropTypes.string
    })
  )
}

export default DropDown
