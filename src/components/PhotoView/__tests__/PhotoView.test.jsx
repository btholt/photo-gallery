// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import PhotoView from '../';
import { photo } from '../../../testHelpers';

test('renders', () => {
  const string = render(<PhotoView id={photo.id} setLoading={() => {}} />);
  expect(string).toMatchSnapshot();
});

test('makes the correct ajax call', () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => {} }));
  const instance = new PhotoView();
  instance.props = { id: photo.id, setLoading: () => {} };
  instance.componentDidMount();
  expect(global.fetch).toBeCalledWith(`/flickr/photo/${photo.id}`);
});
