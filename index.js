/* eslint no-console:0 */

const express = require('express');
const compression = require('compression');
const cors = require('cors');
const Flickr = require('flickrapi');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./flickr_credentials.json'));

const port = 3000;
const normalizeSearchPhoto = photo => ({
  id: photo.id,
  small: photo.url_s,
  medium: photo.url_m,
  large: photo.url_l,
  title: photo.title
});
const normalizeGetPhoto = photo => ({
  id: photo.id,
  small: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
  medium: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  large: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
  title: photo.title._content // eslint-disable-line no-underscore-dangle
});

const app = express();
app.use(compression());
app.use(cors());

app.use('/public', express.static('/public'));

app.get('/flickr/photos/:term/:page', (req, res) => {
  Flickr.tokenOnly(config, (error, flickr) => {
    flickr.photos.search(
      {
        text: req.params.term,
        license: '4,5,6,7',
        safe_search: 1,
        content_type: 1,
        page: req.params.page,
        extras: 'url_s, url_m, url_l'
      },
      (flickrError, flickrResponse) => {
        if (flickrError) {
          console.error(flickrError);
          return res.status(500).json({ error: flickrError }).end();
        }
        return res
          .json({
            pages: flickrResponse.photos.pages,
            photos: flickrResponse.photos.photo.map(normalizeSearchPhoto)
          })
          .end();
      }
    );
  });
});

app.get('/flickr/photo/:id', (req, res) => {
  Flickr.tokenOnly(config, (error, flickr) => {
    flickr.photos.getInfo(
      {
        photo_id: req.params.id
      },
      (flickrError, flickrResponse) => {
        if (flickrError) {
          console.error(flickrError);
          return res.status(500).json({ error: flickrError }).end();
        }
        console.log(flickrResponse.photo.title._content); // eslint-disable-line no-underscore-dangle
        return res.json(normalizeGetPhoto(flickrResponse.photo)).end();
      }
    );
  });
});

console.log(`listening on ${port}`);
app.listen(port);
