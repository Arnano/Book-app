import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import * as spacing from '../../Style/spacing';
import * as media from '../../Style/media';

const height = mediaQuery => props => {
  if (!props[mediaQuery]) return;
  
  return css`
    ${media[mediaQuery]`
      height: ${spacing[props[mediaQuery]] || 0}px;
    `};
  `;
};

const StyledSpacer = styled.div`
  width: 100%;
  ${height('fromExtraSmall')};
  ${height('fromSmall')};
  ${height('fromMedium')};
  ${height('fromLarge')};
`;

StyledSpacer.propTypes = {
  fromExtraSmall: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromLarge: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromMedium: PropTypes.oneOf(['sm', 'md', 'lg', 'none']),
  fromSmall: PropTypes.oneOf(['sm', 'md', 'lg', 'none'])
};

export default StyledSpacer;
