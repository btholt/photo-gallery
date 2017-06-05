// @flow

import { h, Component } from 'preact';
import PhotoStreamPhoto from '../PhotoStreamPhoto';
import Header from '../Header';
import './PhotoStream.css';

const generatePlaceHolders = (max: number): Array<Photo> => {
  const answer = [];
  for (let i = 0; i < max; i += 1) {
    answer.push({
      id: i.toString(),
      small: '/assets/placeholder_small.jpg',
      medium: '/assets/placeholder_medium.jpg',
      large: '/assets/placeholder_large.jpg',
      title: 'placeholder'
    });
  }
  return answer;
};

class PhotoStream extends Component {
  state = {
    photos: generatePlaceHolders(20)
  };
  componentDidMount() {
    fetch('/flickr/photos/dogs/1').then(response => response.json()).then((flickrRes: FlickrPhotosResponse) => {
      this.setState({ photos: flickrRes.photos });
      this.props.setLoading(false);
    });
  }
  componentWillUnmount() {
    this.startLoading();
  }
  startLoading = () => {
    this.props.setLoading(true);
  };
  props: {
    setLoading: Function
  };
  render() {
    return (
      <div className="photo-stream">
        <Header showSpacer title="Image gallery" />
        <div className="photo-stream-photos">
          {this.state.photos.map(photo =>
            <PhotoStreamPhoto
              startLoading={this.startLoading}
              key={photo.id}
              id={photo.id}
              url={photo.small}
              alt={photo.title}
              show
            />
          )}
        </div>
      </div>
    );
  }
}

export default PhotoStream;
