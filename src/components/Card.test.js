import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';


it('expect to render Card component', () => {
  const mockProps = {
    id: 1,
    name: 'James',
    email: 'james@james.com'
  }
  expect(shallow(<Card />)).toMatchSnapshot();
})
