import Styled from 'styled-components';
import { maxSize } from '../../Style/mixins';

const StyledBanner = Styled.div`
  ${maxSize('300px', null)};
  overflow: hidden;
`;

export default StyledBanner;
