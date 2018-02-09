import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './style';

const Header = ({ children, classes }) =>
  <StyledHeader className={classes} >
    { children }
  </StyledHeader >

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
}

export default Header;
