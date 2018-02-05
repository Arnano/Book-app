import React from 'react';
import { storiesOf } from '@storybook/react';
import { wwithInfo, withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import * as colors from '../../Style/colors';
import { keys } from 'lodash';
import Text from './';

const sampleText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;


const selectColors = keys(colors);

const selectSize = {
  fsSmall: 'fsSmall',
  fsMedium: 'fsMedium',
  fsLarge: 'fsLarge'
};

const selectWeight = {
  fwSmall: 'fwSmall',
  fwMedium: 'fwMedium',
  fwLarge: 'fwLarge'
};

storiesOf('UI Component', module)
  .add('Text', 
  withInfo({
    text: `
      Text component is used for every small piece of text (i.e. span) accross the application.
      Color, alignment, font-size and font-weight are customizable.
    `
  }) (() =>
    <Text
      children={text('Text: ', sampleText)}
      size={select('Font size: ', selectSize)}
      weight={select('Font weight: ', selectWeight)}
      color={select('Color: ', selectColors)} />
  )
)