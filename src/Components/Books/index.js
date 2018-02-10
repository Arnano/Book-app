import React from 'react';
import PropTypes from 'prop-types';
import StyledBooks from './style';
import { ImageLinkNewWindow } from '../Image';
import BooksInfo from '../BooksInfo';
import { Row, Col } from '../Grid';

const Books = ({ alt, author, category, classes, description, link, rating, src, title, onClick, buttonText }) =>
  <StyledBooks className={classes}>
        <BooksInfo
          onClick={onClick}
          buttonText={buttonText}
          author={author}
          rating={rating}
          title={title}
          description={description}
          category={category}
          alt={alt}
          link={link}
          src={src} />
  </StyledBooks>

Books.propTypes = {
  alt: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  category: PropTypes.arrayOf(
    PropTypes.string
  ),
  classes: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  rating: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Books;
