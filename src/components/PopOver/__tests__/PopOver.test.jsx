// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import PopOver from '../';

test('renders with show', () => {
  const string = render(<PopOver show />);
  expect(string).toMatchSnapshot();
});

test('renders without show', () => {
  const string = render(<PopOver show={false} />);
  expect(string).toMatchSnapshot();
});
