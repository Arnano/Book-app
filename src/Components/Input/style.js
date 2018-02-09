import Styled from 'styled-components';
import { darkBlue } from '../../Style/colors';

const StyledInput = Styled.input `
  border: 1px solid ${darkBlue};
  opacity: 0.8;
  width: 300px;
  padding: 8px 0;
  border-radius: 4px;
  font-size: 20px;
  line-height: 5px;
`;

export default StyledInput;
