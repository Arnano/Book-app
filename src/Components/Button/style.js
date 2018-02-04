import Styled from 'styled-components';
import { blue, grey } from '../../Style/colors';

const StyledButton = Styled.button `
  border: 1px solid ${blue};
  background: ${grey};
  padding: 5px 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledButton;