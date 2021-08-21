import React from 'react';
import renderer from 'react-test-renderer';
import AddMovieInput from './AddMovieInput';

it('renders correctly', () => {
  const tree = renderer.create(<AddMovieInput />).toJSON();
  expect(tree).toMatchSnapshot(`
        <div className="addMovieInput">
            <label /><input />
        </div>`);
});
