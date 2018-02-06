import React from 'react';
import { keys } from 'lodash';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import * as colors from '../../Style/colors';
import Section from './';
import Text from '../Text';

const selectColors = keys(colors);
const selectPadding = { sm: 'Small', md: 'Medium', lg: 'Large' };
const selectAlign = { left: 'left', center: 'center', right: 'right' };
const selectBorder = { smallB: '1px solid', largeB: '2px solid' }
const selectBorderRadius = { smallBR: '2px', mediumBR: '4px', largeBR: '8px' }

storiesOf('UI Component', module)
  .add('Section', 
  withInfo({
    text: `
      Section component is used to wrap Text, Heading or other display component accross the application.
      Color, alignment, font-size and paddings are customizable.
    `
  }) (() => (
      <Section
        alignment={select('Alignment: ', selectAlign)}
        border={select('Border: ', selectBorder, 'none')}
        borderColor={select('Border color: ', selectColors)} 
        borderRadius={select('Border radius: ', selectBorderRadius, 'none')}
        color={select('Background: ', selectColors)} 
        padding={select('Padding: ', selectPadding)} >
          <Text size='fsMedium' color='darkGrey' > Section text sample </Text>
      </Section>
    ))
  );
