import React from 'react';
import PropTypes from 'prop-types';
import StyledBanner from './style';

import Picture from '../Picture';
import Overlay from '../Overlay';

const Banner = ({ image, overlay }) =>
  <StyledBanner>
    <Picture image={image} />
    { overlay && <Overlay /> }
  </StyledBanner>

Banner.defaultProps = {
  overlay: false
}

Banner.propTypes = {
  image: PropTypes.shape({
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        srcSet: PropTypes.string,
        media: PropTypes.string,
        type: PropTypes.string
      })
    ),
    src: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  overlay: PropTypes.bool
}

export default Banner;
