import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './style';

const Input = ({ classes, onBlur, onChange, onFocus, onClick, type, placeholder, value }) => 
  <StyledInput
    className={classes}
    onBlur={onBlur}
    onFocus={onFocus}
    onChange={onChange}
    onClick={onClick}
    type={type}
    placeholder={placeholder}
    value={value}
  />;

Input.defaultProps = {
  placeholder: '',
  type: 'text'
}

Input.propTypes = {
  classes: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

export default Input;
