import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import * as colors from '../../Style/colors';
import { fsSmall, fsMedium, fsLarge, fwSmall, fwMedium, fwLarge } from '../../Style/fonts';

const StyledText = styled.span`
  ${switchProp('size', {
    fsSmall,
    fsMedium,
    fsLarge
  })};

  ${switchProp('weight', {
    fwSmall,
    fwMedium,
    fwLarge
  })};

  color: ${props => colors[props.color]};
`;

export default StyledText;
