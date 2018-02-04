import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ children, classes, disabled, onClick, type }) => 
  <StyledButton
    disabled={disabled}
    className={classes}
    onClick={onClick}
    type={type}
  >
    { children}
  </StyledButton>

Button.defaultProps = {
  disabled: false,
  type: 'button'
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Button;
