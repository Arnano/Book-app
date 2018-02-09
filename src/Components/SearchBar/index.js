import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './style';

import growth from '../../Style/assets/icons/growth.svg';

import Image from '../Image';
import Input from '../Input';
import Button from '../Button';

const SearchBar = ({ children, onChange, onClick, icon, value}) => 
  <StyledSearchBar>
    <Image classes='c-search-bar__icon' src={growth} alt='searchIcon' />
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
  