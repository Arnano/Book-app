import Styled from 'styled-components';

import { blue } from '../../Style/colors';
import { center, size, maxSize } from '../../Style/mixins';
import { fromExtraSmall, fromSmall, fromMedium, fromLarge, extraLarge } from '../../Style/media';

const padding = 20;
const font_size = 36;
const lineHeight = 0.95;

const StyledHeader = Styled.header`
  position: relative;
  border-bottom: 8px solid ${blue};

  & .c-banner__section {
    ${center('vertical')};
    ${size(null, '100%')};
    padding: 20px;
    z-index: 1;

    ${fromExtraSmall`
      padding-left: 40px;
    `};

    ${fromMedium`padding-left: 20px;`}

    ${fromLarge`
      ${center('bothDirections')};
      ${size(null, '960px')};
    `}
  }

  & .c-banner__section-title {
    ${maxSize(null, '300px')}
    text-shadow: rgba(0,0,0,.6) 0 0 6px;
    line-height: ${lineHeight};
    font-size: ${font_size}px;
    text-transform: uppercase;
    padding-bottom: ${padding + 2}px;

    ${fromSmall`
      ${maxSize(null, '400px')}
      line-height: calc(${lineHeight - 0.05});
      font-size: calc(${font_size + 4}px);
      `
    }

    ${fromMedium`
      ${maxSize(null, '425px')}
      font-size: calc(${font_size + 14}px);
      padding-bottom: ${padding + 5}px;
    `}
  }
`;

export default StyledHeader;
