import React from 'react';
import PropTypes from 'prop-types';
import StyledBooksInfo from './style';
import Text from '../Text';
import Heading from '../Heading';

const BooksInfo = ({ author, category, classes, description, rating, title }) => 
  <StyledBooksInfo className={classes} >
    <div>
      <Heading level={1}> {title} </Heading>
      <Heading level={2}> {author} </Heading>
      { rating && <Text size='fsLarge'> rating: {rating} </Text> }
    </div>
    { description && <p> {description} </p> }
    { category && <Text size='fsSmall'> Category: {category} </Text> }
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
