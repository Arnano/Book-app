import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import spinner from '../../Style/assets/spinner.svg';

import Loading from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Loading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading icon={spinner}> Is loading </Loading>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Loading icon={spinner}> Is loading </Loading>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
