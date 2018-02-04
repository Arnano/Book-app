import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './style';

import Input from '../Input';
import Button from '../Button';

const SearchBar = ({ children, onChange, onClick, value }) => 
  <StyledSearchBar>
    <Input 
      onChange={onChange}
      value={value} />
    <Button
      onClick={onClick} >
      {children}
    </Button>
  </StyledSearchBar>

  SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  export default SearchBar;
  