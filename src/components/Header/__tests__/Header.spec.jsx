// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import Header from '../';

test('renders default', () => {
  const string = render(<Header title="Image gallery" />);
  expect(string).toMatchSnapshot();
});

test('renders with inverted color', () => {
  const string = render(<Header invertColor title="Image gallery" />);
  expect(string).toMatchSnapshot();
});

test('renders with spacer', () => {
  const string = render(<Header showSpacer title="Image gallery" />);
  expect(string).toMatchSnapshot();
});

test('renders with back link', () => {
  const string = render(<Header showBackLink title="Image gallery" />);
  expect(string).toMatchSnapshot();
});

test('renders with invisible class', () => {
  const string = render(<Header visibile={false} title="Image gallery" />);
  expect(string).toMatchSnapshot();
});

test('renders with all props', () => {
  const string = render(<Header showSpacer showBackLink invertColor visibile={false} title="Image gallery" />);
  expect(string).toMatchSnapshot();
});
