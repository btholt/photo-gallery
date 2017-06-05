// @flow

import { h } from 'preact';
import NavigationLink from '../NavigationLink';
import './Header.css';

const MAX_TITLE_LENGTH = 55;
const CHARS_CUT_OFF = 3;

const Header = (props: {
  title: string,
  showBackLink?: boolean,
  visibile?: boolean,
  invertColor?: boolean,
  showSpacer?: boolean,
  startLoading?: Function
}) =>
  <div className={`header-container${props.visibile ? '' : ' is-invisibile'}${props.showSpacer ? ' spacer' : ''}`}>
    <header className={`header-bar${props.invertColor ? ' header-bar-inverse' : ''}`}>
      <h1 className="header-title">
        {props.title.length <= MAX_TITLE_LENGTH
          ? props.title
          : `${props.title.substr(0, MAX_TITLE_LENGTH - CHARS_CUT_OFF)}…`}
      </h1>
    </header>
    {props.showBackLink && props.visibile
      ? <NavigationLink onStart={props.startLoading} to="/">
          <img className="back-icon" alt="go back" src="/assets/icons/x.jpg" />
        </NavigationLink>
      : null}
  </div>;

Header.defaultProps = {
  showSpacer: false,
  showBackLink: false,
  visibile: true,
  invertColor: false,
  startLoading: () => {}
};

export default Header;
