import React from 'react';
import PropTypes from 'prop-types';
import StyledLoading from './style';

import Image from '../Image';

const Loading = ({ classes, children, icon }) =>
  <StyledLoading>
    <Image className={classes} src={icon} alt='Spinner' />
    {children}
  </StyledLoading>

Loading.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
}

export default Loading;
