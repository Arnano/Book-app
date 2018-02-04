import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Image, { ImageLink } from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image src={'http://via.placeholder.com/350x150'} alt={'Placeholder'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Image src={'http://via.placeholder.com/350x150'} alt={'Placeholder'}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Image link', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageLink link={'https://google.com'} src={'http://via.placeholder.com/350x150'} alt={'Placeholder'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<ImageLink link={'https://google.com'} src={'http://via.placeholder.com/350x150'} alt={'Placeholder'}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
