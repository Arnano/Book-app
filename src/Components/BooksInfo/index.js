import React from 'react';
import PropTypes from 'prop-types';
import StyledBooksInfo from './style';

import Section from '../Section';
import Text from '../Text';
import Heading from '../Heading';

const BooksInfo = ({ author, category, classes, description, rating, title }) => 
  <StyledBooksInfo className={classes} >
    <Section>
      <Heading level={2} size='h2'> {title} </Heading>
      <Heading level={3} size='h3'> {author} </Heading>
      { rating && <Text size='fsMedium'> rating: {rating} </Text> }
    </Section>
    <Section alignment='center' >
      { description && <p> <Text size='fsSmall'> {description} </Text> </p> }
      { category && <Text size='fsSmall'> Category: {category} </Text> }
    </Section>
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
