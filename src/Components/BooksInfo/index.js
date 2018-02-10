import React from 'react';
import PropTypes from 'prop-types';
import StyledBooksInfo from './style';

import Section from '../Section';
import Text from '../Text';
import Heading from '../Heading';
import Button from '../Button';
import { ImageLinkNewWindow } from '../Image';

const BooksInfo = ({ alt, link, src, author, category, classes, description, rating, title, onClick, buttonText }) => 
  <StyledBooksInfo className={classes} >
    <Section>
    <ImageLinkNewWindow
          classes='wrap'
          alt={alt}
          link={link}
          src={src} />
      <Heading level={2} size='h2'> {title} </Heading>
      <Heading level={3} size='h3'> {author} </Heading>
      { rating && <Text size='fsMedium'> rating: {rating} </Text> }
      { description && <p> <Text size='fsSmall'> {description} </Text> </p> }
      { category && <Text size='fsSmall'> Category: {category} </Text> }
      <Button onClick={onClick} btnStyle='success'> <Text size='fsLarge'> {buttonText} </Text> </Button>
    </Section>
  </StyledBooksInfo >

BooksInfo.propTypes = {
  author: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  category: PropTypes.arrayOf(
    PropTypes.string
  ),
  classes: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired
}

export default BooksInfo;
