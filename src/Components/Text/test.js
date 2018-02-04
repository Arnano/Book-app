import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Text from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text size='fsSMall'> Text </Text>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Text size='fsSMall'> Text </Text>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
