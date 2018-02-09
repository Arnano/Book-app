import React from 'react';
import PropTypes from 'prop-types';

import StyledPicture from './style';
import Image from '../Image';

const Picture = ({ image }) =>
  <StyledPicture >
    {/*`<!--[if IE 9]><video style="display: none;"><![endif]-->`*/}
    { image.sources.map((source, index) => {
      return <source key={index} media={source.media} srcSet={source.srcset}/>
    })}
  
    {/*`<!--[if IE 9]></video><![endif]-->`*/}
    <Image src={image.src} alt={image.alt}/>
  </StyledPicture >

Picture.propTypes = {
  // image: PropTypes.shape({
  //   sources: PropTypes.array(
  //     PropTypes.shape({
  //       srcSet: PropTypes.string,
  //       media: PropTypes.string,
  //       type: PropTypes.string
  //     })
  //   ),
  //   src: PropTypes.string,
  //   alt: PropTypes.string
  // }).isRequired,
}

export default Picture;
