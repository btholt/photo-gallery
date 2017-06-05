// @flow

export type Photo = {
  id: string,
  title: string,
  small: string,
  medium: string,
  large: string
};

export type FlickrPhotosResponse = {
  pages: number,
  photos: Array<Photo>
};
