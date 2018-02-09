import React from 'react';
import PropTypes from 'prop-types';

import StyledAppWrapper from './style';

const AppWrapper = ({ classes, children }) =>
  <StyledAppWrapper className={classes} >
    { children }
  </StyledAppWrapper >

AppWrapper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
}

export default AppWrapper;
