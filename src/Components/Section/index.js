import React from 'react';
import PropTypes from 'prop-types';
import { keys } from 'lodash';

import * as colors from '../../Style/colors';
import StyledSection, { StyledContainer } from './style';

const Section = ({ alignment, border, borderColor, borderRadius, children, classes, color, padding }) =>
  <StyledSection
    alignment={alignment}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    className={classes}
    color={color}
    padding={padding} >
    <StyledContainer > { children } </StyledContainer>
  </StyledSection>

Section.defaultProps = {
  alignment: 'left',
  border: 'none',
  borderColor: 'none',
  borderRadius: 'none',
  color: 'none',
  padding: 'sm',
}

Section.propTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  border: PropTypes.oneOf(['smallB', 'largeB', 'none']),
  borderColor: PropTypes.oneOf([...keys(colors), 'none']), 
  borderRadius: PropTypes.oneOf(['smallBR', 'mediumBR', 'largeBR', 'none']),
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf([...keys(colors), 'none']),
  padding: PropTypes.oneOf(['sm', 'md', 'lg']),
  center: PropTypes.bool
}

export default Section;
