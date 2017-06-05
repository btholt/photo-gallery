// @flow

import { h } from 'preact';
import NavigationLink from '../NavigationLink';
import './PhotoStreamPhoto.css';

const PhotoStreamPhoto = (props: { id: string, url: string, alt: string, startLoading: Function }) =>
  <NavigationLink onStart={props.startLoading} to={`/${props.id}`} className="stream-photo">
    <div
      aria-label={props.alt}
      role="img"
      className="stream-photo-img"
      style={{ backgroundImage: `url(${props.url})` }}
    />
  </NavigationLink>;

export default PhotoStreamPhoto;
