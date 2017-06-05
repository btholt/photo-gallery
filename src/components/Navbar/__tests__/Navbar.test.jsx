// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import Navbar from '../';

test('renders with visibile', () => {
  const string = render(<Navbar />);
  expect(string).toMatchSnapshot();
});

test('renders without visibile', () => {
  const string = render(<Navbar visibile={false} />);
  expect(string).toMatchSnapshot();
});
