// @flow

import { h, Component } from 'preact';
import { route } from 'preact-router';

class NavigationLink extends Component {
  static defaultProps = {
    delay: 1000,
    className: ''
  };
  props: {
    delay?: number,
    children: mixed,
    to: string,
    onStart: Function,
    className?: string
  };
  delayNavigation = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.props.onStart();
    setTimeout(() => {
      route(this.props.to);
    }, this.props.delay);
    return false;
  };
  render() {
    return (
      <a className={this.props.className} href={this.props.to} onClick={this.delayNavigation}>
        {this.props.children}
      </a>
    );
  }
}

export default NavigationLink;
