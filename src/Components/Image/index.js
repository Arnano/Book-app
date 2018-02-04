import React from 'react';
import PropTypes from 'prop-types';
import StyledImage, { StyledImageLink } from './style';

const Image = ({ alt, classes, src }) =>
  <StyledImage
    alt={alt}
    className={classes} 
    src={src} />

const ImageLink = ({ alt, classes, link, src }) => 
  <StyledImageLink href={link} >
      <StyledImage
        alt={alt}
        className={classes} 
        src={src} />
  </StyledImageLink>

const ImageLinkNewWindow = ({ alt, classes, link, rel, src, target }) => 
  <StyledImageLink 
    href={link}
    rel={rel}
    target={target} >
      <StyledImage
        alt={alt}
        className={classes} 
        src={src} />
  </StyledImageLink>

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
}

ImageLink.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

ImageLinkNewWindow.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank'
}

ImageLinkNewWindow.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
  link: PropTypes.string.isRequired,
  rel: PropTypes.string,
  src: PropTypes.string.isRequired,
  target: PropTypes.string
}

export default Image;
export { ImageLink, ImageLinkNewWindow };
