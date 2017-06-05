// @flow

import { h } from 'preact';
import './Navbar.css';

const Navbar = (props: { visibile?: boolean }) =>
  <nav className={`navbar${props.visibile ? '' : ' is-invisibile'}`}>
    <img className="navbar-item" src="/assets/icons/plusOne.jpg" alt="give +1" />
    <img className="navbar-item" src="/assets/icons/comment.jpg" alt="comment" />
    <img className="navbar-item" src="/assets/icons/add.jpg" alt="add" />
    <img className="navbar-item" src="/assets/icons/arrow.jpg" alt="share" />
  </nav>;

Navbar.defaultProps = {
  visibile: true
};

export default Navbar;
