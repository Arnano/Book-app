import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Search bar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar onClick={() => {}}>Search</SearchBar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<SearchBar onClick={() => {}}>Search</SearchBar>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
