import React from 'react';
import { shallow } from 'enzyme';

import Scroll from './Scroll';


it('expect to render Scroll component', () => {
  const mockProps = {
    children: [
      <h1>Hello</h1>
    ]
  }
  expect(shallow(<Scroll />)).toMatchSnapshot();
})
