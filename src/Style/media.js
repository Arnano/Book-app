/**
 * Store all the helpers to handle responsive design
 */

import { css } from 'styled-components';
import grid from './grid';

const { breakpoints: { el, lg, md, sm, xs } } = grid;
const query = size => (...args) =>
  css`
    @media (min-width: ${size}em) {
      ${css(...args)};
    }
  `;

export const fromExtraSmall = query(xs);
export const fromSmall = query(sm);
export const fromMedium = query(md);
export const fromLarge = query(lg);
export const extraLarge = query(el);