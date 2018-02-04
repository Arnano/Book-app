import React from 'react';
import PropTypes from 'prop-types';
import StyledBooksInfo from './style';

const BooksInfo = ({ author, category, classes, description, rating, title }) => 
  <StyledBooksInfo className={classes} >
    <div>
      <h1> {title} </h1>
      <h2> {author} </h2>
      { rating && <span> rating: {rating} </span> }
    </div>
    { description && <p> {description} </p> }
    { category && <span> Category: {category} </span> }
  </StyledBooksInfo >

BooksInfo.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  classes: PropTypes.string,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired
}

export default BooksInfo;
