import { css } from 'styled-components';
import { blue, darkBlue } from './colors';
import { fontSize } from './mixins';
import { fromSmall } from './media';

// export const primary = 'Lustria, serif';
export const primary = 'Spinnaker, sans-serif';
export const primaryLarge = 'Spinnaker, sans-serif';
// export const secondary = 'Marcellus, serif';
export const secondary = 'Taviraj, serif';

export const fwSmall = '300';
export const fwMedium = '400';
export const fwLarge = '500';

export const fontSmoothing = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const fsSmall = css`
  ${fontSmoothing};
  font-family: ${primary};
  ${fontSize('12','16')};
  font-style: normal;
  font-weight: ${fwMedium};
`;

export const fsMedium = css`
  ${fontSmoothing};
  font-family: ${primary};
  ${fontSize('14','18')};
  font-style: normal;
  font-weight: ${fwMedium};
`;

export const fsLarge = css`
  ${fontSmoothing};
  font-family: ${primaryLarge};
  ${fontSize('16','24')};
  font-style: normal;
  font-weight: ${fwMedium};
`;

export const h1 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  ${fontSize('30','38')};
  font-style: normal;
  font-weight: ${fwMedium};
  ${fromSmall`${fontSize('44','54')};`};
`;

export const h2 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  ${fontSize('24','32')};
  font-style: normal;
  font-weight: ${fwMedium};
  ${fromSmall`${fontSize('36','44')};`};
`;

export const h3 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  ${fontSize('22','28')};
  font-style: normal;
  font-weight: ${fwMedium};
  ${fromSmall`${fontSize('26','34')};`};
`;

export const h4 = css`
  ${fontSmoothing};
  font-family: ${secondary};
  ${fontSize('20','28')};
  font-style: normal;
  font-weight: ${fwMedium};
  ${fromSmall`${fontSize('22','28')};`};
`;

export const link = css`
  ${fontSmoothing};
  color: ${darkBlue};
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${blue};
  }
`;
