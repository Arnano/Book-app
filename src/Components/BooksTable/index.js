import React from 'react';
import PropTypes from 'prop-types';
import StyledBooksTable from './style';

const BooksTable = ({ classes, children }) =>
  <StyledBooksTable className={classes}>
    {children}
  </StyledBooksTable>

BooksTable.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node
}

export default BooksTable;
