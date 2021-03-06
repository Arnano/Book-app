import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Books from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Books', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Books 
        alt={'img'} 
        author={'Arnaud'}
        category={'Fantasy'}
        description={'Book about fantasy'}
        link={'https://google.com'}
        rating={3}
        src={'#'}
        title={'Terrendiul'} /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Books 
      alt={'img'} 
      author={'Arnaud'}
      category={'Fantasy'}
      description={'Book about fantasy'}
      link={'https://google.com'}
      rating={3}
      src={'#'}
      title={'Terrendiul'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

