import Styled from 'styled-components';

import { grey } from '../../Style/colors';
import { shadow } from '../../Helpers/style';

const StyledCard = Styled.div`
  max-width: 960px;
  margin: 10px auto 10px 10px;
  position: relative;
  border-radius: 8px;
  background-clip: padding-box;
  border: 1px solid ${grey};
  box-shadow: ${shadow};
  transition: box-shadow 0.3s ease;
  padding: 0;
  list-style: none;
`;

export default StyledCard;
