// @flow

import { h, Component } from 'preact';
import Header from '../Header';
import Navbar from '../Navbar';
import './PhotoView.css';

const MAX_MENU_VISIBILE = 5000;

class PhotoView extends Component {
  state = {
    visibileNav: false,
    photo: {}
  };
  componentDidMount() {
    fetch(`/flickr/photo/${this.props.id}`)
      .then(response => response.json())
      .then(flickrData => {
        this.setState({ photo: flickrData });
        this.handleVisibilityChange();
      })
      .catch(err => {
        console.error('error', err); // eslint-disable-line no-console
      });

    this.props.setLoading(true);
  }
  componentWillUnmount() {
    this.clearVisibilityTimeout();
    this.props.setLoading(true);
  }
  props: {
    id: string,
    setLoading: Function
  };
  visibileTimer = null;
  clearVisibilityTimeout() {
    if (this.visibileTimer) {
      clearTimeout(this.visibileTimer);
      this.visibileTimer = null;
    }
  }
  imgLoaded = () => {
    this.props.setLoading(false);
  };
  startLoading = () => {
    this.props.setLoading(true);
  };
  handleVisibilityChange = () => {
    this.clearVisibilityTimeout();

    const nowVisibile = !this.state.visibileNav;
    if (nowVisibile) {
      this.visibileTimer = setTimeout(() => this.setState({ visibileNav: !nowVisibile }), MAX_MENU_VISIBILE);
    }
    this.setState({ visibileNav: nowVisibile });
  };
  render() {
    return (
      <section
        aria-checked={this.state.visibileNav}
        role="switch"
        tabIndex="0"
        onClick={this.handleVisibilityChange}
        className="photo-view"
      >
        <Header
          startLoading={this.startLoading}
          visibile={this.state.visibileNav}
          invertColor
          showBackLink
          title={this.state.photo.title || ''}
        />
        <div className="photo-viewer">
          {this.state.photo.large
            ? <img
                onLoad={this.imgLoaded}
                className="photo-view-img"
                src={this.state.photo.large}
                alt={this.state.photo.title}
              />
            : null}
        </div>
        <Navbar visibile={this.state.visibileNav} />
      </section>
    );
  }
}

export default PhotoView;
