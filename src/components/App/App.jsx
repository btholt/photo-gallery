// @flow

import { h, Component } from 'preact';
import Router from 'preact-router';
import PhotoStream from '../PhotoStream';
import PhotoView from '../PhotoView';
import PopOver from '../PopOver';
import './App.css';

const POPOVER_TIMER = 1000;

class App extends Component {
  state = {
    loading: true,
    showPopOver: true
  };
  componentWillUnmount() {
    if (this.intervalID) {
      clearTimeout(this.intervalID);
    }
  }
  setLoading = (loading: boolean) => {
    if (loading) {
      this.setState({ showPopOver: true }, () => {
        setTimeout(() => this.setState({ loading: true }), 50);
      });
      if (this.intervalID) {
        clearTimeout(this.intervalID);
        this.intervalID = null;
      }
    } else {
      this.setState({ loading: false });
      this.intervalID = setTimeout(() => {
        this.setState({ showPopOver: false });
        this.intervalID = null;
      }, POPOVER_TIMER + 20);
    }
  };
  intervalID = null;
  render() {
    return (
      <section>
        {this.state.showPopOver ? <PopOver show={this.state.loading} /> : null}
        <div className={`app-container${this.state.loading ? ' is-loading' : ''}`}>
          <Router>
            <PhotoStream path="/" setLoading={this.setLoading} />
            <PhotoView path="/:id" id="n/a" setLoading={this.setLoading} />
          </Router>
        </div>
      </section>
    );
  }
}

export default App;
