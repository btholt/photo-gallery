// @flow

import { h } from 'preact';
import render from 'preact-render-to-string';
import NavigationLink from '../';

jest.useFakeTimers();

test('renders', () => {
  const string = render(
    <NavigationLink to="/test/link" className="test-class" onStart={() => {}}>Test Link</NavigationLink>
  );
  expect(string).toMatchSnapshot();
});

test('delays navigation', () => {
  const instance = new NavigationLink();
  const stopPropagation = jest.fn();
  const preventDefault = jest.fn();
  const onStart = jest.fn();
  instance.props = { onStart, to: '/more/url/things', children: 'more testing stuff' };
  instance.delayNavigation(
    ({
      stopPropagation,
      preventDefault,
      onStart
    }: any)
  );
  expect(stopPropagation).toBeCalled();
  expect(preventDefault).toBeCalled();
  expect(onStart).toBeCalled();
});
