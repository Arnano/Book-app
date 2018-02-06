import React from 'react';
import PropTypes from 'prop-types';
import { keys } from 'lodash';

import * as colors from '../../Style/colors';
import buildHeading from './style';

const Heading = ({ center, children, classes, color, id, level, size, weight }) => {
  const StyledHeading = buildHeading(level);
  return (
    <StyledHeading 
      center={center} 
      className={classes} 
      color={color} 
      id={id} 
      size={size} 
      weight={weight}>
        {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  color: 'darkGrey',
  center: false
};

Heading.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf([...keys(colors)]),
  id: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  weight: PropTypes.oneOf(['fwSmall', 'fwMedium', 'fwLarge'])
};

export default Heading;
