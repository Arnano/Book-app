import React from 'react';
import PropTypes from 'prop-types';
import StyledBooks from './style';
import { ImageLinkNewWindow } from '../Image';
import BooksInfo from '../BooksInfo';
import { Row, Col } from '../Grid';

const Books = ({ alt, author, category, classes, description, link, rating, src, title }) =>
  <StyledBooks className={classes}>
    <Row>
      <Col sm={2}>
        <ImageLinkNewWindow
          alt={alt}
          link={link}
          src={src} />
      </Col>
      <Col sm={10}>
        <BooksInfo 
          author={author}
          rating={rating}
          title={title}
          description={description}
          category={category} />
      </Col>
    </Row>
  </StyledBooks>

Books.propTypes = {
  alt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  classes: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rating: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Books;
