import React from 'react';
import PropTypes from 'prop-types';
import { keys } from 'ramda';
import * as colors from '../../Style/colors';
import StyledText from './style';

const Text = ({ children, classes, color, size, weight }) =>
  <StyledText
    className={classes}
    color={color}
    size={size}
    weight={weight} >
      {children}
  </StyledText>

Text.defaultProps = {
  classes: '',
  color: 'darkGrey',
  size: 'fsMedium',
  weight: 'fwMedium'
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(keys(colors)),
  size: PropTypes.oneOf(['fsSmall', 'fsMedium', 'fsLarge']).isRequired,
  weight: PropTypes.oneOf(['fwSmall', 'fwMedium', 'fwLarge'])
};

export default Text;
