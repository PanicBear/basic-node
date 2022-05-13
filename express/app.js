import express from 'express';
const app = express();

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('first1');
//     next('route');
//   },
//   (req, res, next) => {
//     console.log('first2');
//     next();
//   },
// );

// app.get('/', (req, res, next) => {
//   res.send('second');
//   console.log('second');
// });

// app.get('/error', (req, res, next) => {
//   console.log('error page');
//   next(new Error('error page'));
// });

// app.use((req, res, next) => {
//   res.status(404).send('Not available');
// });

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later');
// });

app.use(express.json());

app.post('/', (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(8080);
