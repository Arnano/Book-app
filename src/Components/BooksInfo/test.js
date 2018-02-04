import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BooksInfo from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Books info', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BooksInfo 
        author={'Arnaud'}
        category={'Fantasy'}
        description={'Book about fantasy'}
        rating={3}
        title={'Terrendiul'} /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <BooksInfo 
      author={'Arnaud'}
      category={'Fantasy'}
      description={'Book about fantasy'}
      rating={3}
      title={'Terrendiul'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

