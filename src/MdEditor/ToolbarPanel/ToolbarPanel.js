import React from 'react';
import PropTypes from 'prop-types';

//MUI stuff
import Toolbar from '@material-ui/core/Toolbar';

//Custom components
import ToolbarSection from './ToolbarSection';
import getButtonsSchema from './buttonsSchema';

const ToolbarPanel = ({ cm, tokens, title }) => (
  <Toolbar>
      {
        getButtonsSchema(cm, tokens).map((section, i) =>
          <ToolbarSection key={i} items={section} />
        )
      }
  </Toolbar>
)


ToolbarPanel.propTypes = {
  cm: PropTypes.object, //eslint-disable-line
  tokens: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
}

export default ToolbarPanel
