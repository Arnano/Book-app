import { keyframes } from 'styled-components';

/**
 * Stores global variables
 */

export const baseline = 10; // Baseline for font-size in rem
export const siteMaxWidth = `960px`; // site width
export const hoverDuration = '0.3s ease'; // Hover animation
export const hoverOpacity = 0.8; // Hover opacity
export const shadow = '0 2px 5px 0 rgba(0, 0, 0, 0.05)'; // Shadow
export const spinning = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

