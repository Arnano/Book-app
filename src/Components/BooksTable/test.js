import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BooksTable from './';

Enzyme.configure({
  adapter: new Adapter()
}); 

describe('Books table', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksTable>Table</BooksTable>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<BooksTable>Table</BooksTable>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
