import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Heading from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Heading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading size='h1' level={1}> Heading </Heading>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Heading size='h1' level={1}> Heading </Heading>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
