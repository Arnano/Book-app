import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ children, classes, disabled, onClick, type, btnStyle }) => 
  <StyledButton
    disabled={disabled}
    className={classes}
    onClick={onClick}
    btnStyle={btnStyle}
    type={type}
  >
    { children}
  </StyledButton>

Button.defaultProps = {
  btnStyle: 'primary',
  disabled: false,
  type: 'button'
}

Button.propTypes = {
  btnStyle: PropTypes.oneOf([ 'primary', 'success', 'danger', 'disabled' ]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Button;
