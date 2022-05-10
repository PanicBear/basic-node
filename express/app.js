import express from 'express';
const app = express();

app.get(
  '/',
  (req, res, next) => {
    console.log('first1');
    next('route');
  },
  (req, res, next) => {
    console.log('first2');
    next();
  },
);

app.get('/', (req, res, next) => {
  res.send('second');
  console.log('second');
});

app.get('/error', (req, res, next) => {
  console.log('error page');
  next(new Error('error page'));
});

app.use((req, res, next) => {
  res.status(404).send('Not available');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later');
});

app.listen(8080);
