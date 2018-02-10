import Styled from 'styled-components';
import { darkBlue } from '../../Style/colors';
import { primary } from '../../Style/fonts';

const StyledInput = Styled.input `
  border: 1px solid ${darkBlue};
  opacity: 0.8;
  width: 300px;
  padding: 8px 0;
  border-radius: 4px;
  font-size: 20px;
  line-height: 5px;
  font-family: ${primary};
  font-style: italic;
`;

export default StyledInput;
