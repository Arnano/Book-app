import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './style';

const Card = ({ classes, children }) =>
  <StyledCard className={classes} >
    { children }
  </StyledCard >

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
}

export default Card;
