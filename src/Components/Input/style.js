import Styled from 'styled-components';
import { blue } from '../../Style/colors';

const StyledInput = Styled.input `
  border: 1px solid ${blue};
  opacity: 0.8;
  width: 300px;
  padding: 8px 0;
  border-radius: 4px;
`;

export default StyledInput;