import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // html form => body

const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static('public', options));
