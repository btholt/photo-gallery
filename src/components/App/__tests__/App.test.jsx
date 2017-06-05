// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import App from '../';

test('renders', () => {
  const string = render(<App />);
  expect(string).toMatchSnapshot();
});
