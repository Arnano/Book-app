import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './style';

const Icon = ({ x, y, classes, width, height, name }) =>
  <StyledIcon
    viewBox={`${x} ${y} ${width} ${height}`}
    classname={classes} >
    <use xlinkHref={`../../Style/assets/icons/icons.svg#${name}`} />
  </StyledIcon>

Icon.defaultProps = {
  x: 0,
  y: 0,
  width: 10,
  height: 10
}

Icon.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Icon;
