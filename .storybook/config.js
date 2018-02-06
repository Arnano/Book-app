import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

const StyledStories = {
    maxWidth: '95%',
    margin: '0 auto'
}

// Option defaults:
setOptions({
  name: 'Styleguide Book-app',
  url: '#',
  showStoriesPanel: true,
  addonPanelInRight: true
});



addDecorator((storyFn) => <div style={StyledStories}> { storyFn() } </div>);
addDecorator(withKnobs);

const componentStories = require.context('../src/Components', true, /stories.js$/);
const loadStories = () => componentStories.keys().forEach(componentStories);

configure(loadStories, module);
