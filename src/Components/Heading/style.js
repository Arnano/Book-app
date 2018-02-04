import styled from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { h1, h2, h3, h4, fwSmall, fwMedium, fwLarge } from '../../Style/fonts';
import { darkGrey, blue } from '../../Style/colors';

export default level => {
  const type = `h${level}`;
  return styled[type]`
    ${switchProp('size', {
      h1,
      h2,
      h3,
     h4
    })};

    ${ifProp('center', 'text-align: center;')};

    color: ${switchProp('color', {
      darkGrey,
      blue
    })};

    font-weight: ${switchProp('weight', {
      fwSmall,
      fwMedium,
      fwLarge
    })};
  `;
};
