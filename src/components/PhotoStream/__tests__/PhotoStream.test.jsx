// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import PhotoStream from '../';
import { photos } from '../../../testHelpers';

test('renders', () => {
  const string = render(<PhotoStream setLoading={() => {}} />);
  expect(string).toMatchSnapshot();
});

test('makes the correct ajax call', () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => photos }));
  const instance = new PhotoStream();
  instance.props = { setLoading: () => {} };
  instance.componentDidMount();
  expect(global.fetch).toBeCalledWith('/flickr/photos/dogs/1');
});
