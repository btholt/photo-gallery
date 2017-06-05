// @flow

import { h } from 'preact';
import './PopOver.css';

const PopOver = (props: { show: boolean }) =>
  <div className={`popover${props.show ? ' is-visibile' : ''}`} role="dialog" aria-labelledby="dialogTitle">
    <div className="popover-container">
      <h2 className="popover-title" id="dialogTitle">Loading</h2>
      <img className="popover-img" src="/assets/icons/loading.svg" alt="loading animation" />
    </div>
  </div>;

export default PopOver;
