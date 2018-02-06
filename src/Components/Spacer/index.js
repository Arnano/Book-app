import React from 'react';
import PropTypes from 'prop-types';

import StyledSpacer from './style';

const Spacer = ({ fromExtraSmall, fromLarge, fromMedium, fromSmall }) => 
  <StyledSpacer 
    fromExtraSmall={fromExtraSmall} 
    fromLarge={fromLarge} 
    fromMedium={fromMedium} 
    fromSmall={fromSmall} />

Spacer.propTypes = {
  fromExtraSmall: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromLarge: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromMedium: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromSmall: PropTypes.oneOf(['sm', 'md', 'lg', 'none'])
};

export default Spacer;
