import Styled from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

import * as colors from '../../Style/colors';
import { lg, md, sm } from '../../Style/spacing';
import { smallB, largeB } from '../../Style/border';
import { smallBR, mediumBR, largeBR } from '../../Style/borderRadius';

const StyledContainer = Styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
`;
  
const StyledSection = Styled.section`
  position: relative;
  padding-top: ${switchProp('padding', { sm: `${sm}px`, md: `${md}px`, lg: `${lg}px` })};
  padding-bottom: ${switchProp('padding', { sm: `${sm}px`, md: `${md}px`, lg: `${lg}px` })};
  padding-right: ${sm}px;
  padding-left: ${sm}px;
  text-align: ${props => props.alignment};
  background-color: ${props => colors[props.color]};
  border: ${switchProp('border', { smallB, largeB })};
  border-radius: ${switchProp('borderRadius', { smallBR, mediumBR, largeBR })};
  border-color: ${props => colors[props.borderColor]};
`;

export default StyledSection;
export { StyledContainer };


//border: ${props => props.border};
//border-radius: ${props => props.borderRadius};