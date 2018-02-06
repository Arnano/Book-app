import React from 'react';
import { storiesOf } from '@storybook/react';
import { wwithInfo, withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import * as colors from '../../Style/colors';
import { keys } from 'lodash';
import Heading from './';

const selectColors = keys(colors);

const selectSize = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4'
};

const range = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4'
};

const selectWeight = {
  fwSmall: 'fwSmall',
  fwMedium: 'fwMedium',
  fwLarge: 'fwLarge'
};

storiesOf('UI Component', module)
  .add('Heading', 
  withInfo({
    text: `
      Heading component accross the application.
      Can be of type h1, h2, h3 or h4
      Color, alignment, font-size and font-weight are customizable.
    `
  }) (() =>
    <Heading
      children={text('Heading: ', 'Heading Sample Text')}
      size={select('Font size: ', selectSize)} 
      level={select('Level', range, 1)}
      weight={select('Font weight: ', selectWeight)}
      color={select('Color: ', selectColors)} />
  )
)
