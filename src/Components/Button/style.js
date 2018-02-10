import Styled from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';
import { 
  blue, 
  darkBlue,
  red, 
  darkRed, 
  green, 
  darkGreen 
} from '../../Style/colors';

const StyledButton = Styled.button `
 border: ${switchProp('btnStyle', {
   'primary': `1px solid ${darkBlue}`,
   'success': `1px solid ${darkGreen}`,
   'danger': `1px solid ${darkRed}`
 })};

  background: ${switchProp('btnStyle', {
    'primary': `${blue}`,
    'success': `${green}`, 
    'danger': `${red}`
  })}; 
  
  padding: 5px 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;

  &:hover {
    opacity: 0.8;
  }

  ${ifProp('disabled', `cursor: default;`)};
`;

export default StyledButton;