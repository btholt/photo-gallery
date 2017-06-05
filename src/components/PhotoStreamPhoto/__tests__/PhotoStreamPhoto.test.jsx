// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import PhotoStreamPhoto from '../';
import { photo } from '../../../testHelpers';

test('renders', () => {
  const string = render(<PhotoStreamPhoto startLoading={() => {}} id={photo.id} url={photo.small} alt={photo.title} />);
  expect(string).toMatchSnapshot();
});
