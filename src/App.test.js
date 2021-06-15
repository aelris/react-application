import {configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import React from 'react';
import App from './App';

configure({ adapter: new Adapter() });
describe('<App> Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
