import Styled from 'styled-components';

import { maxSize, size } from '../../Style/mixins';

const StyledPicture = Styled.picture`
  ${maxSize(null, '100%')};
  display: block;
  
  source,
  img {
    ${size(null, '100%')};
    ${maxSize(null, '100%')};
  }
`;

export default StyledPicture;
